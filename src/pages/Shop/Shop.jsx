import ShopNav from './ShopNav'
import ShopProductDisplay from './ShopProductDisplay'
export default function Shop() {
  
  return (
    <section className="py-16 px-12 bg-[#F8F6F3] flex lg:flex-row flex-col-reverse">
      <ShopNav/>
      <ShopProductDisplay/>
    </section>
  )
}
