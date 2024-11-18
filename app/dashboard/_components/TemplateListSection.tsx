import template from '@/app/(data)/template'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}
export interface FORM{
label:string,
field:string,
name:string,
required?:boolean,
}
function TemplateListSection({userSeachInput}:any) {
  const [templateList,setTemplateList] = useState(template)
  useEffect(()=>{
       if(userSeachInput){
        const filterData = template.filter(item=>item.name.toLowerCase().includes(userSeachInput.toLowerCase()))
             setTemplateList(filterData);
      }else{
             setTemplateList(template);
      }
  },[userSeachInput])
return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item:TEMPLATE,index:number)=>(
               <TemplateCard {...item}/>
      ))}
    </div>
  )
}

export default TemplateListSection
