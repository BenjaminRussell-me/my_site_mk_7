import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    data: object
}

class DataStore extends Store<Api> {
    protected data(): Api {
        return {
            data: {}
        }
    }
    setData(location: string) {
      axios.get(`http://192.168.7.196:1337/${location}`).then(response => {
        console.log(response)
        this.state.data = response.data
    })
}
}

export const dataStore: DataStore = new DataStore()