
import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    page: strapi
}

interface strapi {
    Hero: {
        url: string
    }
}

class PageStore extends Store<Api> {
    protected data(): Api {
        return {
            page: {
                Hero: {
                    url: ''
                }
            }
        }
    }
    setPage(location: string, slug: string | string[]) {
        let url = ''
        if(import.meta.env.DEV) {
            url = 'http://192.168.7.196:1337/'
        } else {
            url = "http://73.65.80.236:1337/"
        }
      axios.get(`${url}${location}`).then(response => {
          console.log(response.data)
        const found = response.data.filter((obj: { Slug: string }) => {
            return obj.Slug === slug
        })
        this.state.page = found[0]
        console.log(found)
    })

}
}

export const pageStore: PageStore = new PageStore()