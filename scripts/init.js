import { execSync, spawnSync } from "child_process"
import fs from "fs"
import path from "path"
const moduleUitls = ["pnpm", "yarn", "npm"]
const leng = moduleUitls.length

// console.log(path.join("/","package.json"))

try {
  console.log("安装最外层的依赖。。。")
  spawnSync(`pnpm`, ["install"], {
    cwd: ".",
    stdio: "inherit"
  })
  console.log("安装最外层的依赖完成。。。")
} catch (error) {
  console.log("安装最外层的依赖报错了：", error)
}

for (let index = 0; index < leng; index++) {
  const element = moduleUitls[index]
  try {
    const getOutPut = execSync(`${element} -v`)
    console.log(`${element} 的版本是: `, `${getOutPut}`)
    console.log("开始安装依赖: ")
    const projects = fs
      .readdirSync(".")
      .filter(name => fs.existsSync(path.join(name, "package.json")))
    projects.forEach(project => {
      spawnSync(`${element}`, ["install"], {
        cwd: project,
        stdio: 'inherit'
      })
      console.log(`${project} 依赖安装完成!!!!`)
    })
    break
  } catch (error) {
    console.log(error)
    console.log(`${element}可能有问题, 开始使用其他包管理器`)
    if (index === leng - 1) {
      // 说明所有包管理器都有问题
      console.log(`${moduleUitls.join(",")}可能都有问题`)
    }
  }
}
