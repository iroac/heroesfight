import HeroesList from './heroeslist'
import { Suspense } from 'react'
import Skeleton from './skeleton'
import getData from '../utils/getData'

   
  export default async function Page({ searchParams }: {searchParams: { [key: string ]: string | string[] | undefined }}) {
    
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '50'
    const search = searchParams['search'] ?? ''

    const data: any = await getData()
   
    return <section >
        <Suspense fallback={< Skeleton />} >
        <HeroesList search={search} page={page} per_page={per_page} data={data}  />
        </Suspense>            
    </section>
  }