import SearchBar from './searchbar'
import Typography from '@mui/material/Typography'

export default function NavBar() {
return ( 
    <>
          <nav className='flex flex-row gap-5 items-start justify-between bg-black mb-8 w-screen h-auto p-6 '> 
          
          <div className='flex flex-row gap-2 ' >
          <h1 className=' text-blue-500 text-4xl font-luckiestGuy ' >Heroes</h1>
          <h1 className=' text-red-500  text-4xl font-luckiestGuy ' >Fight</h1>
          </div>
      
<SearchBar />
      </nav>
    </>
)  
}