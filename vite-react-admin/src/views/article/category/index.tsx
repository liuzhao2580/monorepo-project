import { useEffect, useState } from "react"
import { Tree } from "antd"
import "./index.scss"

import { getArticleCategoryByLazyApi } from "@/api/modules/article"
import { ArticleCategoryByLazyDto } from "@shared/dto/article.dto"
import { ResultCode } from "@shared/enum/result-enum"

interface DataNode {
  title: string
  key: string
  isLeaf?: boolean
  children?: DataNode[]
}

const updateTreeData = (
  list: DataNode[],
  key: React.Key,
  children: DataNode[]
): DataNode[] =>
  list.map(node => {
    if (node.key === key) {
      return {
        ...node,
        children
      }
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children)
      }
    }
    return node
  })

/** 文章分类列表组件 */
const CategoryCom = () => {
  const params: ArticleCategoryByLazyDto = {}
  const [treeData, setTreeData] = useState<DataNode[]>([])

  // 初始化接口数据，获取最外层的分类数据。
  async function handleInit() {
    const data = await getArticleCategoryByLazyApi(params)
    if (data.code === ResultCode.SUCCESS) {
      let treeData: DataNode[] = []
      treeData = data.data.map(item => {
        return {
          title: item.categoryName,
          key: item.id
        }
      })
      setTreeData(treeData)
    }
  }
  useEffect(() => {
    handleInit()
  }, [])

  // 懒加载数据
  const onLoadData = async ({ key, children }: DataNode) => {
    new Promise<void>(resolve => {
      if (children) {
        resolve()
        return
      }
      getArticleCategoryByLazyApi({
        parentId: key
      }).then(res => {
        if (res.code === ResultCode.SUCCESS) {
          const children: DataNode[] = res.data.map(item => {
            return {
              title: item.categoryName,
              key: item.id
            }
          })
          setTreeData(origin => updateTreeData(origin, key, children))

          resolve()
        }
      })
    })
  }

  return (
    <Tree
      selectable={false}
      showLine={true}
      loadData={onLoadData}
      treeData={treeData}
    />
  )
}

export default CategoryCom
