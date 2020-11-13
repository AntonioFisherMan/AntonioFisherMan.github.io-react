import { instance, multiData } from './api'

export const goodsAPI = {
    changeFilter(pageNumber = 1, pageSize = 10, data: any) {
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
    setReviews(name: string, photo: string, files: any, goodsId: string, rating = 100) {
        files.append('name', name)
        files.append('photo', photo)
        files.append('rating', rating)
        return instance.post(`goods/reviews/${goodsId}`, files, multiData).then((res) => res.data)
    },
    changeRating(rating: number | null, goodsId: string) {
        return instance.post(`goods/rating/${goodsId}`, { rating })
    },
}
