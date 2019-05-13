import {
  HTTP
} from "../utils/http.js"

class DealModel extends HTTP {

  getDealList(category){
    return this.request({
      url:`deal/${category}/all`
    })
  }

  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }

}

export {
  DealModel
}