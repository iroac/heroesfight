import getData from '../../utils/getData'
import Image from 'next/image'
import PaginationControls from '@/components/pagination/paginationControl'




export default async function HeroesList({search, page, per_page}: {search: string | string[]; page: string | string[]; per_page: string | string[];}) {

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  

  await new Promise (resolve => setTimeout(resolve, 10000))
  const data: any = await getData()
  const heroes: [] = data.slice(start, end)
    
    

  return (
            <>
            <div className=' flex justify-center items-center flex-wrap gap-3 w-screen' >
      {!search ? (
        heroes.map((item: any, index: any) => {
          let sum = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat;
          return (
            <div className="text-white flex flex-col justify-center items-center" key={index}>
              <Image alt={item.name} src={item.images.sm} width={120} height={560} />
              <h1>{item.name}</h1>
              <h2>{sum}</h2>
            </div>
          );
        })
      ) : (
        data.map((item: any, index: any) => {
          if (item.name.toLowerCase().includes(search) || item.name.toUpperCase().includes(search)) {
            let sum = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat;
            return (
              <div className="text-white flex flex-col justify-center items-center" key={index}>
                <Image alt={item.name} src={item.images.sm} width={120} height={560} />
                <h1>{item.name}</h1>
                <h2>{sum}</h2>
              </div>
            );
          }
        })
      )}
    </div><PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} /></>
  )
}