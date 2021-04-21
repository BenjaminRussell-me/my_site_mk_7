
import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    page: strapi
}

interface strapi {
    Hero?: img
    Title?: string | undefined
    date?: string
    basicBlock?: Array<basicBlock> | undefined
}

interface basicBlock {
    textBlock?: Array<textBlock>
    title: string
    img: img
    codePen: string
}

interface textBlock {
    title: string
    img: img
    text: string
}

interface img {
    url: string
}

class PageStore extends Store<Api> {
    protected data(): Api {
        return {
            page:{}
        }
    }
    setPage(location: string, slug: string | string[]) {
      axios.get(`${import.meta.env.VITE_URL}/${location}`).then(response => {
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