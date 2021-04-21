export default function () {
    function setNoWidow(text: string | undefined) {
        if(text !== ''  && text !== undefined) {
            console.log(text)
      const lastWord = text.slice(text.lastIndexOf(' ') + 1)
      const index = text.lastIndexOf(' ')
      text = text.substring(0, index)
      return `${text}\xA0${lastWord}`
        }
    }
    return {
        setNoWidow
    }
}