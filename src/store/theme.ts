
import {Store} from "./main"
import axios from "axios"

interface Api extends Object {
    themes: {
        dark: Theme
    }
}
interface Theme {
    grey: hsla
    g1: hsla
    g2: hsla
    g3: hsla
    g4: hsla
    white: hsla
}

interface hsla {
    h: number
    s: number
    l: number
    a: number
}

class ThemesStore extends Store<Api> {
    protected data(): Api {
        return {
            themes: {
                dark: {
                    grey: {h:220,s:20,l:20,a:100},
                    g1: {h:200,s:80,l:50,a:100},
                    g2: {h:185,s:80,l:50,a:100},
                    g3: {h:160,s:80,l:50,a:100},
                    g4: {h:145,s:80,l:50,a:100},
                    white: {h:200,s:80,l:95,a:100}
                }
            }
        }
    }
}

export const themesStore: ThemesStore = new ThemesStore()