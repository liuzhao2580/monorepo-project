const db = uniCloud.database()
exports.main = async (event, context) => {
	const result = {
		code: 0,
		msg: "成功",
		data: []
	}
	const {
		userName,
		password
	} = event
	const getUser = await db.collection("user").where({
		userName
	}).get()

	if (getUser.affectedDocs) {
		result.code = 100
		result.msg = '该用户名已经存在，请更换用户名'
		return result
	}

	const res = await db.collection("user").add({
		userName,
		password
	})

	result.data = res
	return result
};