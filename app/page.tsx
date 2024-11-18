import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  return (
  <div>
   <div className="flex items-center justify-between mx-4">
        <Image src={'/logo.svg'} alt='logo' width={160} height={100} className=""/>
        <UserButton/>
   </div>
   <div className="m-auto text-center mt-20">
    <h1 className="font-bold text-2xl">Ultimate AI Content Generator</h1>
    <p className="text-gray-500">Our platform offers a suite of powerful tools to help you <br /> 
       Generate social media contents with the power of AI</p>
   </div>
   <div className="text-center mt-10">
   <Link href={'dashboard'}><Button>Get Started</Button></Link>
   </div>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center mt-20">
    <div>
      <h2 className="font-bold">Increased Efficiency</h2>
      <p className="text-gray-500">Automate your workflows and <br />
         streamilne your processes for <br /> maximum productivty
       </p>
    </div>
    <div>
      <h2 className="font-bold">Accelerated Growth</h2>
      <p className="text-gray-500">Leverage our cutting-edge tools to<br />
         drive innovation and scale your<br />contents
       </p>
    </div>
    <div>
      <h2 className="font-bold">AI Powered</h2>
      <p className="text-gray-500">Use our AI to generate contents on <br />
         the go by simple suggestions
       </p>
    </div>
   </div>
  </div>
  );
}
