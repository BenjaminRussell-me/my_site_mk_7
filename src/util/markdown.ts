
import marked from "marked";
export default function () {
	function setMarkdown(text: string) {
      let root = import.meta.env.VITE_URL;
      const mk = marked(text, { baseUrl: root });
      return mk;
	}
	return {
		setMarkdown
	}
}