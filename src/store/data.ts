import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    data: data
    }
interface data {
    data: {
        Title: string
        Slug: string
    }
    email?: string
    website?: string
    skills?: Array<textArray>
    experience?: {
        title?: string
        subHead?: string
        experiences?: Array<textArray>
    }
    about?: Array<textArray>
}

interface textArray {
    text: string
}


class DataStore extends Store<Api> {
    protected data(): Api {
        return {
            data: {
                data: {
                    Title: '',
                    Slug: '',
                }
            }
        }
    }
    setData(location: string) {
      axios.get(`${import.meta.env.VITE_URL}/${location}`).then(response => {
        console.log(response)
        this.state.data = response.data
    })
}
}

export const dataStore: DataStore = new DataStore()