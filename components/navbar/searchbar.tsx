'use client'

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export default function SearchBar() {
  return (
    <>
    <div className=' flex flex-row h-8 bg-transparent placeholder-white rounded-full border placeholder-opacity-80 border-purple-400 md:w-72 w-44 ' >
      <IconButton type="button" className=' h-7 text-white ' aria-label="search"><SearchIcon /></IconButton>
       <InputBase className=' h-8 bg-transparent placeholder-white text-white rounded-full placeholder-opacity-80 w-3/4 ' placeholder="Enconte um herói" inputProps={{ 'aria-label': 'search google maps' }}/>
      </div>
    </>
  );
}