const setData = require("return-data")
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		userName,
		password
	} = event

	const getUser = await db.collection("user").where({
		userName,
		password
	}).get()

	if (getUser.affectedDocs) {
		return setData({
			data: getUser.data[0]
		})
	}
	else {
		return setData({
			code: 100,
			msg:"用户名或密码错误"
		})
	}
};