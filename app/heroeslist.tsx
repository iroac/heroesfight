'use client'

import PaginationControls from '@/components/pagination/paginationControl'
import HeroCart from '@/components/pagination/herocart';
import Modal from '@/components/pagination/modal';
import { useState} from 'react'




export default function HeroesList({search, page, per_page, data}: {search: string | string[]; page: string | string[]; per_page: string | string[]; data: any}) {
const [ showModal, setShowModal ] = useState(false);
const [ firstHero, setFirstHero ] = useState<any>([])
const [ secondHero, setSecondHero ] = useState<any>([])


const handleClick = (item: any) => {
    if(!firstHero.id) {
      setFirstHero(item)
      
    } else if(firstHero.id && !secondHero.id) {
      setSecondHero(item)
      
      setShowModal(true)
    } 
}

const handleClose = () => {
  setShowModal(false)
  setFirstHero([])
    setSecondHero([])
}

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  
 
  
  const heroes: [] = data.slice(start, end)
  let count = 1;

  return (
            <>
            { showModal ? <Modal hero1={firstHero} hero2={secondHero} onClose={handleClose} /> : '' }
            <div className=' flex justify-center items-center flex-wrap gap-3 w-screen' >
      {!search ? (
        heroes.map((item: any, index: any) => {
          let sum = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat;
          return (
             <div key={index} className=' cursor-pointer ' onClick={() => handleClick(item)} > <HeroCart sum={sum} item={item} hero1={firstHero} hero2={secondHero} /> </div>
          );
        })
      ) : (
        data.map((item: any, index: any) => {
          if ( count <= 20 && item.name.toLowerCase().includes(search) || item.name.toUpperCase().includes(search)) {
          count = count + 1;
            let sum = item.powerstats.intelligence + item.powerstats.strength + item.powerstats.speed + item.powerstats.durability + item.powerstats.power + item.powerstats.combat;
            return (
              <div key={index} className=' cursor-pointer ' onClick={() => handleClick(item)} > <HeroCart  sum={sum} item={item} hero1={firstHero} hero2={secondHero}  /> </div>
            );
          }
        })
      )}
    </div>
    {!search ? <PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} /> : '' }
    </>
  )
}