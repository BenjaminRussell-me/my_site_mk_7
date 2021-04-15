export default function (){
 function getStrapiMedia(url: string) {
      return `http://192.168.7.196:1337${url}`;
 }
 return {
     getStrapiMedia,
 }
}
