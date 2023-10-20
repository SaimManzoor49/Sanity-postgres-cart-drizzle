import { client } from '@/lib/sanityClient'
import getImgUrl from '../../sanity/lib/getImgUrl';

interface IProduct{
  title:string,
  description:string,
  image:any,
  imgUrl:string|undefined

}

export const getProductData =async()=>{
  const query = `*[_type=='product']{
    price,
    _id,
    title,
    image,
    category -> {
      name
    }
}`
   const res = await client.fetch(query)
   return res;
}

export default async function Home() {
  let data:IProduct[] = await getProductData();
 
  data = data.map((d)=>{
    let imgUrl = getImgUrl(d.image).url()
    d.imgUrl = imgUrl
return d
  })
  
  console.log(data);
  return (
   <>
  {
    data.map((d)=>(<h1 key={d.description}>{d.title}</h1>))
  }
   </>
  )
}
