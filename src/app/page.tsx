import { client } from '@/lib/sanityClient'
import getImgUrl from '../../sanity/lib/getImgUrl';
import { Image as IImage } from 'sanity';
import Image from 'next/image'
import ProductCard from '@/components/ProductCard';

interface IProduct {
  title: string,
  _id: string,
  price: string,
  description: string,
  image: IImage,
  imgUrl: string | '',
  category: {
    name: string
  }

}

const getProductData = async () => {
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
  let data: IProduct[] = await getProductData();

  data = data.map((d) => {
    let imgUrl = getImgUrl(d.image).url()
    d.imgUrl = imgUrl
    return d
  })

  return (
    <>
      <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 ">

        {
          data.map((d) => (
            <div key={d._id}>
              <ProductCard d={d} />
            </div>
          ))
        }
      </div>
    </>
  )
}
