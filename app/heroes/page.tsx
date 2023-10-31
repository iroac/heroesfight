import HeroesList from './heroeslist'
import { Suspense } from 'react'
import Skeleton from './skeleton'

   
  export default async function Page({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {
    
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '50'
    const search = searchParams['search'] ?? ''
   
    return <section key={Math.random()}  >
        <h1 className='flex text-white items-center justify-center text-2xl mb-6' >Heroes Fight</h1>
        <Suspense fallback={< Skeleton />} >
        <HeroesList search={search} page={page} per_page={per_page}  />
        </Suspense>            
    </section>
  }