import PaginationControls from '@/components/pagination/paginationControl'
import HeroesList from './heroeslist'
import getData from '@/utils/getData'
import { Suspense } from 'react'



   
  export default async function Page({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {
    
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '50'
    const search = searchParams['search'] ?? ''
    
        
   
    return <section  >
        
        <h1 className='flex text-white items-center justify-center text-2xl mb-6' >Heroes Fight</h1>

        <Suspense fallback='loading from suspense...' >
        <HeroesList search={search} page={page} per_page={per_page}  />
        </Suspense>

            
        
    </section>
  }