/**
 * @param {number} code 成功 0,失败 100,token 的失败
 * @param {any} data 返回的数据
 * @param {string} msg 返回的消息
 */
module.exports = function({
	code = 0,
	data = [],
	msg = '成功'
}) {
	// 公用模块用法请参考 https://uniapp.dcloud.io/uniCloud/cf-common
	return {
		code,
		data,
		msg
	}
}