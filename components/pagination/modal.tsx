'use client'

import ReactDom from 'react-dom'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { useEffect } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
 
export default function Modal({hero1, hero2, onClose}: {hero1: any, hero2: any, onClose: any}) {

    const sumHero1 = hero1.powerstats.intelligence + hero1.powerstats.strength + hero1.powerstats.speed + hero1.powerstats.durability + hero1.powerstats.power + hero1.powerstats.combat;
    const sumHero2 = hero2.powerstats.intelligence + hero2.powerstats.strength + hero2.powerstats.speed + hero2.powerstats.durability + hero2.powerstats.power + hero1.powerstats.combat;


    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        };
    }, [])

  return ReactDom.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
        <div className=' fixed inset-0 bg-gray-300 opacity-80 ' ></div>
        <div className="fixed inset-0 flex items-center justify-center">
        <div className=' w-full md:w-4/5 lg:w-3/5 xl:w-2/5 bg-cover bg-center ' style={{ backgroundImage: `url(/blackredbg.avif)` }}  >
          <div className='w-full h-full p-4 bg-opacity-50 bg-black ' >
            <div className='flex flex-col justify-between h-full text-white' > 

            <div className='flex flex-row justify-center items-center text-3xl gap-4 font-luckiestGuy ' >
<h1 className='text-green-400' >Winner</h1>
<h1 className='text-white' >{sumHero1 > sumHero2 ? `${hero1.name}` : `${hero2.name}`}</h1>
        </div>

    <div className='flex flex-row justify-between w-full' >

<div className=' flex flex-row justify-center items-center gap-2 w-4/12  ' >
        <div className=' flex flex-col justify-center items-center gap-2 ' >
        <h1 className='font-luckiestGuy text-xl' >{hero1.name}</h1>
        <Image alt={hero1.name} src={hero1.images.sm} width={120} height={180} />
        </div> 
        </div>

<div className=' flex flex-row justify-between items-center sm:w-4/12 w-6/12 sm:text-ml text-sm pt-10 ' >
        <div className='flex flex-col justify-center gap-1 items-center ' > 
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.combat}</h1> { hero1.powerstats.combat > hero2.powerstats.combat ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.durability}</h1> { hero1.powerstats.durability > hero2.powerstats.durability ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.intelligence}</h1> { hero1.powerstats.intelligence > hero2.powerstats.intelligence ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.power}</h1> { hero1.powerstats.power > hero2.powerstats.power ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.speed}</h1> { hero1.powerstats.speed > hero2.powerstats.speed ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
                <div className=' flex flex-row justify-center items-center gap-1  ' > <h1>{hero1.powerstats.strength}</h1> { hero1.powerstats.strength > hero2.powerstats.strength ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> } </div>
        </div> 

        <div className=' flex flex-col justify-center gap-1 items-center font-luckiestGuy ' >
            <h1 className='  flex flex-row ' >Intelligence</h1>
            <h1 className='  '>Strength</h1>
            <h1 className='  '>Speed</h1>
            <h1 className='  '>Durability</h1>
            <h1 className='  '>Power</h1>
            <h1 className='  '>Combat</h1>
        </div>

        <div className='flex flex-col justify-center gap-1 items-center ' > 
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.combat > hero1.powerstats.combat ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.combat}</h1> </div>
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.durability > hero1.powerstats.durability ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.durability}</h1> </div>
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.intelligence > hero1.powerstats.intelligence ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.intelligence}</h1> </div>
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.power > hero1.powerstats.power ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.power}</h1> </div>
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.speed > hero1.powerstats.speed ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.speed}</h1> </div>
        <div className=' flex flex-row justify-center items-center gap-1  ' > { hero2.powerstats.strength > hero1.powerstats.strength ? <AiFillCaretUp className=" text-green-500 " /> : <AiFillCaretDown className=" text-red-600 " /> }  <h1>{hero2.powerstats.strength}</h1> </div>
        </div>  

        </div>


<div className=' flex flex-row justify-center items-center gap-2 w-4/12  ' >
        <div className=' flex flex-col justify-center items-center gap-2 ' >
        <h1 className='font-luckiestGuy text-xl' >{hero2.name}</h1>
        <Image alt={hero2.name} src={hero2.images.sm} width={120} height={180} />
        </div>
        </div>
    
    
    </div>

<div className='flex justify-end pt-6' >
        <Button onClick={() => onClose()} variant="text" className=' text-xl font-luckiestGuy hover:text-blue-500 text-red-500 transition duration-500 ' >NEW FIGHT</Button>
        </div>

        </div>

</div>
</div>
</div>
    </div>
    ,
    // @ts-ignore
    document.querySelector('.modal-container')
  );
}

