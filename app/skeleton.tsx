'use client'


export default function Skeleton() {
  return (
    <div className=' flex h-full justify-center items-center flex-wrap gap-3 w-screen' >
        {[...Array(30)].map((movie, index) => (
            <div key={index} className=' flex flex-col justify-center items-center w-auto h-auto gap-1 '  >
            <div style={{height: '180px', width: '120px'}} className=' animate-pulse bg-gray-600  '></div>
            <div style={{height: '10px', width: '70px'}} className=' animate-pulse bg-gray-600  '></div>
            <div style={{height: '10px', width: '40px'}} className=' animate-pulse bg-gray-600  '></div>
            </div>
        ))}
    </div>
  )
}
