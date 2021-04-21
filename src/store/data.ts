import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    data: {
        data: object
    }
}

class DataStore extends Store<Api> {
    protected data(): Api {
        return {
            data: {
                data: {}
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