import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {

   
  return (
    <div className='p-10 bg-gradient-to-br flex-col from-purple-500 via-purple-700 to-blue-600 flex justify-center item-center text-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What Would You Like to Something Today?</p>
      <div className='w-full flex justify-center items-center '>
        <div className='flex gap-2 items-center justify-center p-2 my-5 w-[50%] border rounded-md bg-white'>
            <Search className='text-primary'/>
          <input type='text' placeholder='Search...'
          onChange={(event)=>onSearchInput(event.target.value)}
          className='bg-transparent w-full outline-none text-black'/>
        
        </div>
      </div> 
    </div>
  )
}

export default SearchSection
