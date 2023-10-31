'use client'

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
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
    <div className='flex flex-row h-8 rounded-full border-2 border-blue-600 md:w-72 w-44'>
        <SearchIcon sx={{ color: 'white', height: '1.75rem' }} aria-label="search" />
      <InputBase
        onChange={(e) => setText(e.target.value)}
        sx={{
          '& .MuiInputBase-input': {
            height: '8px',
            backgroundColor: 'transparent',
            color: 'white', 
            '&::placeholder': {
              color: 'white', 
              opacity: '0.8',
            },
            width: '90%',
          },
        }}
        placeholder="Encontre um herói"
        inputProps={{ 'aria-label': 'encontre um héroi' }}
      />
    </div>
  </>
  );
}