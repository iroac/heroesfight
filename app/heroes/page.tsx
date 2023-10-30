import Image from 'next/image'


async function getData() {
    const res = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main>
        
        <h1 className='flex text-white items-center justify-center text-2xl mb-6' >Heroes Fight</h1>
        
        
            <div className=' flex justify-center items-center flex-wrap flex-shrink gap-3 w-screen '  >
                {data.map((item: any, index: any) => {
                    if(item.id <= 10) {
                        let sum = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat
                        return <div className='text-white flex flex-col justify-center items-center ' key={index}>
                          <Image alt={item.name} src={item.images.sm} width={120} height={560} />  
                            <h1>{item.name}</h1>
                            <h2>{sum}</h2>
                            </div>
                    } 
                })}
            </div>
        
    </main>
  }