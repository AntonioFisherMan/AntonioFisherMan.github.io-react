import { instance, config } from './api'

export const goodsAPI = {
    changeFilter(pageNumber: number, pageSize: number, data: any) {
        return instance.post(`goods?page=${pageNumber}&pageSize=${pageSize}`, { data }).then((res) => res.data)
    },
    getGood(id: string) {
        return instance.get(`goods/${id}`).then((res) => {
            return res.data
        })
    },
    getReviews() {
        return instance.get('goods/reviews').then((res) => res.data)
    },
    setReviews(files: any, goodsId: string, name: string, userImage: any) {
        files.append('name', name)
        files.append('userImage', userImage)
        return instance.post(`goods/reviews/${goodsId}`, files, config).then((res) => res.data)
    },
    changeRating(rating: number | null, goodsId: string) {
        return instance.post(`goods/rating/${goodsId}`, { rating })
    },
}
