import { instance, config } from './api'

export const goodsAPI = {
    changeFilter(pageNumber: number, pageSize: number, data: any) {
        return instance.post(`goods?page=${pageNumber}&pageSize=${pageSize}`, { data }).then((res) => res.data)
    },
    getGood(id: string) {
        return instance.get(`goods?goodsId=${id}`).then((res) => res.data)
    },
    getReviews() {
        return instance.get('reviews').then((res) => res.data)
    },
    setReviews(files: any, goodsId: string, name: string, userImage: any) {
        files.append('name', name)
        files.append('userImage', userImage)
        return instance
            .post(`reviews?goodsId=${goodsId}`, files, {
                headers: { Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string) },
            })
            .then((res) => res.data)
    },
    changeRating(rating: number | null, goodsId: string) {
        return instance.put(`goods/?goodsId=${goodsId}`, { rating })
    },
}
