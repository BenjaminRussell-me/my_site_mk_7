export default function (){
 function getStrapiMedia(url: string) {
      return `${import.meta.env.VITE_URL}${url}`;
 }
 return {
     getStrapiMedia,
 }
}
