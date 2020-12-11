let success = true
exports.pagination = (pageSize, page, resultGoods, res) => {
    const totalCount = Object.keys(resultGoods).length
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize
    const goods = resultGoods.slice(startIndex, endIndex)
    let payload = Object.assign({ totalCount }, { goods })
    res.json({ payload, success })
}
