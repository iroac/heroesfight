'use client'

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {useDebounce} from 'use-debounce'

export default function SearchBar() {
    const router = useRouter()
const [text, setText] = useState('')
const [query] = useDebounce(text, 700)

useEffect(() => {
    if(!query) {
        router.push('/')
    } else {
        router.push(`/?search=${query}`)
    }
}, [query])


  return (
    <>
    <div className=' flex flex-row h-8 bg-transparent placeholder-white rounded-full border-2 placeholder-opacity-80 border-blue-600 md:w-72 w-44 ' >
      <IconButton type="button" className=' h-7 text-white ' aria-label="search"><SearchIcon /></IconButton>
       <InputBase onChange={e => setText(e.target.value)} sx={{ '&.MuiInputBase-input': { height: '8px', backgroundColor: 'transparent', color: 'white', borderRadius: '50px', '&::placeholder': { color: 'white', opacity: '0.8', }, width: '75%', }, }} className=' w-3/4 ' placeholder="Encontre um herói" inputProps={{ 'aria-label': 'encontre um héroi' }}/>
      </div>
    </>
  );
}