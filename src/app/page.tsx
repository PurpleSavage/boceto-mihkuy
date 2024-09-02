'use client'
import Image from "next/image";
import { useState } from "react";
import AboutMihkuy from "@/components/AboutMihkuy";
import AboutObjective from "@/components/AboutObjective";
import AboutPoint from "@/components/AboutPoint";
import SectionUser from "@/components/SectionUser";
import SectionVendor from "@/components/SectionVendor";

export default function Home() {
  const [section,setSection]=useState(1)
  const handleClickSelected =(idsection:number)=>{
    if(!idsection) return
    setSection(idsection)
  }
  return (
    <main className="min-h-screen relative
     bg-gradient-to-r from-violet-100 from-10% via-fuchsia-200 via-30% to-slate-50 to-90%">
  
      <div className="absolute flex items-center justify-center
       bottom-0 left-0 top-0 right-0 z-10">
        {/* <video width="320" height="240"  loop>
          <source src="video.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video> */}
        <Image
          src="/logoMihkuy-nobg.png"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex flex-col absolute bottom-0 top-0 left-0 right-0 z-20">
        <header className="flex items-center shadow-md py-5 px-4 w-full">
            <div className="flex items-center">
              <span className="text-lg font-bold">
                MihKuy
              </span>
              <Image
                src="/logoMihkuy-nobg.png"
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className="grow flex items-center justify-center">
              <span className="text-sm font-medium">De emprendedores para emprendedores</span>
            </div>
        </header>
        <div className="flex p-6 w-full grow "> 
          <aside className="shadow-xl h-[400px] bg-slate-100 border border-slate-300 
          rounded-md lg:w-[35%] flex flex-col">
            <nav className="w-full border-b border-slate-300 flex items-center justify-center py-4">
              <ul className="flex gap-6 items-center">
                <li className={`bg-slate-200 py-1 text-stone-800 cursor-pointer px-4 rounded-md hover:bg-slate-300
                   ${section ===1 ? 'bg-slate-300':''}`}>
                  <button onClick={()=>handleClickSelected(1)}>Mihkuy</button> 
                </li>
                <li className={`bg-slate-200 py-1 text-stone-800 cursor-pointer px-4 rounded-md hover:bg-slate-300
                   ${section ===2 ? 'bg-slate-300':''}`}>
                  <button onClick={()=>handleClickSelected(2)}>Objetivo</button>
                </li>
                <li className={`bg-slate-200 py-1 text-stone-800 cursor-pointer px-4 rounded-md hover:bg-slate-300
                  ${section ===3 ? 'bg-slate-300':''}`}>
                  <button onClick={()=>handleClickSelected(3)}>¿Para qué sirve?</button>
                </li>
              </ul>
            </nav>
            <div className="p-4  w-full grow">
              {
                (section===1) &&  <AboutMihkuy/>
              }
              {
                (section===2) &&  <AboutObjective/>
              }
              {
                (section===3) &&  <AboutPoint/>
              }
            </div>
          </aside>
          <section className="flex items-center flex-col gap-4 grow">
              <span className="block bg-red font-bold text-6xl text-stone-800">Mih Kuy</span>
              <div className="relative h-[300px] bg-slate-100 space-y-2 bg-opacity-50 w-1/2 flex flex-col items-center
               justify-start py-4 rounded-md border border-slate-300 ">
                <div className="border-y flex items-center gap-4  border-slate-300 py-1 w-full px-4">
                  <span className="size-[20px] block bg-slate-300 rounded-full"></span>
                  <span className="h-[20px] w-[50px] block bg-slate-300 rounded-full"></span>
                  <span className="size-[20px] block bg-slate-300 rounded-full"></span>
                </div>
                <SectionUser/>
                <SectionVendor/>
              </div>
          </section>
        </div>
      </div> 
    </main>
  );
}
