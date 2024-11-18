"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutPutSection from '../_components/OutPutSection'
import template from '@/app/(data)/template'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AIModel'


interface PROPS {

  params: Promise<{ 'template-slud': string }>;
}
function CreateNewContent({ params }: { params: { 'template-slud': string } }) {

  const selectedTemplate:TEMPLATE|undefined=template?.find((item)=>item.slug==props.params["template-slud"]);
  const [loading,setLoading]=useState(false);
  const[aiOutput,setAiOutput]=useState<string>('')

  const GenerateAIContent = async(formData:any)=>{
    setLoading(true);
             const SelectedPrompt = selectedTemplate?.aiPrompt;
             const FinallAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;
             const result = await chatSession.sendMessage(FinallAIPrompt);
             console.log(result.response.text());
             setAiOutput(result?.response.text());
             
             setLoading(false);               
  }
 
  return (
    <div className='p-10'>
       <Link href={'/dashboard'}>
      <Button><ArrowLeft/>Back</Button>
      </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
      {/* FormSection */}
     <FormSection selectedTemplate={selectedTemplate} 
                userForInput={(v:any)=>GenerateAIContent(v)}  loading={loading}/>
     {/* OutPutSection */}
    
     <div className='col-span-2'>
     <OutPutSection aiOutput={aiOutput}/>
     </div>
    </div>
    </div>
  )
}

export default CreateNewContent
