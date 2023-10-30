import SearchBar from './searchbar'
import Typography from '@mui/material/Typography'

export default function NavBar() {
return ( 
    <>
          <nav className='flex flex-row gap-5 items-center justify-between bg-black mb-8 w-screen h-auto p-3 '> 
          <div className='flex flex-row justify-center items-center gap-5 ' >
      <h1 className='text-2xl text-red-500 font-bold'>PLAY</h1>   
      <Typography variant="body1" color="white">CARTAS</Typography>
      </div>
<SearchBar />
      </nav>
    </>
)  
}