
import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    page: object
}

class PageStore extends Store<Api> {
    protected data(): Api {
        return {
            page: {}
        }
    }
    setPage(data: object|null, location: string, slug: string | string[]) {
        if(data !== null) {
            this.state.page = data
        } else {
      axios.get(`http://192.168.7.196:1337/${location}`).then(response => {
          console.log(response.data)
        const found = response.data.filter((obj: { Slug: string }) => {
            return obj.Slug === slug
        })
        this.state.page = found[0]
        console.log(found)
    })
}
}
}

export const pageStore: PageStore = new PageStore()