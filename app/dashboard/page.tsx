"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput,setUserSearchInput] = useState<string>()
    return (
    <div>
     {/* Search Setion */}

         <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

     {/* Template List Section */}
     <TemplateListSection userSeachInput={userSearchInput} />
     </div> 
  )
}

export default Dashboard
