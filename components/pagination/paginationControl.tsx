'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function PaginationControls({ hasNextPage, hasPrevPage,}: PaginationControlsProps) {
 
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '50' 

  return (
    <div className='flex flex-row justify-center items-center mt-10 gap-2'>
      <IconButton
        className=' text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
       <ArrowBackIosIcon/>
      </IconButton>

      <IconButton
        className=' text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        <ArrowForwardIosIcon/>
      </IconButton>
    </div>
  )
}

 