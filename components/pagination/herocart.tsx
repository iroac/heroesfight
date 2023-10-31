'use client'

import Image from 'next/image'
import {RiSwordFill} from 'react-icons/ri'
import { Box } from '@mui/material';

export default function Herocart({item, sum, hero1, hero2}: {item: any; sum: any; hero1: any; hero2: any}) {
if(item.id === hero1.id || item.id === hero2.id) {
  return ( <div  className={`text-white flex flex-col justify-center items-center rounded-xl opacity-90 ${sum < 100 ? 'bg-gray-500 ' : ''} ${sum > 100 && sum < 400 ? 'bg-green-500' : ''} ${sum > 400 && sum < 600 ? 'bg-purple-500' : ''} ${sum > 500 && sum < 600 ? ' bg-yellow-600' : ''} ${sum >= 600 ? 'bg-red-500' : ''}`}>
  <Box  sx={{ height: 270, width: 190 }} className={`flex flex-col group rounded-xl justify-center items-center border-2 ${sum < 100 ? 'border-gray-500 ' : ''} ${sum > 100 && sum < 400 ? 'border-green-500' : ''} ${sum > 400 && sum < 600 ? 'border-purple-500' : ''} ${sum > 500 && sum < 600 ? ' border-yellow-600' : ''} ${sum >= 600 ? 'border-red-500' : ''}    `} > 
  <h1 className='  font-luckiestGuy ' >{item.name}</h1>  
  <Image className={`shadow-2xl group-hover:h-9/12 group-hover:w-9/12 border-2 group-hover:border-4 border-black rounded-md`} alt={item.name} src={item.images.sm} width={120} height={180} />  
  <div className=' flex flex-row justify-center items-center gap-1 mt-2 ' >
  <RiSwordFill className=' text-xl text-white ' />
  <h2 className="font-luckiestGuy" >{sum}</h2>
  </div>
  </Box>
</div>)
} else {
  return ( <div  className={`text-white flex flex-col justify-center items-center rounded-xl hover:opacity-90 ${sum < 100 ? 'hover:bg-gray-500 ' : ''} ${sum > 100 && sum < 400 ? 'hover:bg-green-500' : ''} ${sum > 400 && sum < 600 ? 'hover:bg-purple-500' : ''} ${sum > 500 && sum < 600 ? ' hover:bg-yellow-600' : ''} ${sum >= 600 ? 'hover:bg-red-500' : ''} transition duration-500 `}>
  <Box  sx={{ height: 250, width: 180, '&:hover': { height: 270, width: 190 }, }} className={`flex flex-col group rounded-xl justify-center items-center border-2 ${sum < 100 ? 'border-gray-500 ' : ''} ${sum > 100 && sum < 400 ? 'border-green-500' : ''} ${sum > 400 && sum < 600 ? 'border-purple-500' : ''} ${sum > 500 && sum < 600 ? ' border-yellow-600' : ''} ${sum >= 600 ? 'border-red-500' : ''}    `} > 
  <h1 className='  font-luckiestGuy ' >{item.name}</h1>  
  <Image className={` shadow-2xl group-hover:h-9/12 group-hover:w-9/12 border-2 group-hover:border-4 group-hover:border-black rounded-md  ${sum < 100 ? 'shadow-gray-500 border- ' : ''} ${sum > 100 && sum < 400 ? 'shadow-green-500 border-green-500' : ''} ${sum > 400 && sum < 500 ? 'shadow-purple-500 border-purple-500' : ''} ${sum > 500 && sum < 600 ? 'shadow-yellow-600 border-yellow-600' : ''} ${sum >= 600 ? 'shadow-red-500 border-red-500' : ''}    `}  alt={item.name} src={item.images.sm} width={120} height={180} />  
  <div className=' flex flex-row justify-center items-center gap-1 mt-2 ' >
  <RiSwordFill className=' text-xl text-white ' />
  <h2 className="font-luckiestGuy" >{sum}</h2>
  </div>
  </Box>
</div>
)
}


  
}
