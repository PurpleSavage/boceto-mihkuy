

export default function SectionVendor() {
   
  return (
    <div>
        <div className="flex shadow-lg flex-col overflow-hidden absolute top-[70px] -left-[20px]
        rounded-md border border-slate-100 pb-2 bg-slate-400 bg-opacity-75 h-[300px] w-[300px] z-40 px-2">
            <div className="py-2 flex items-center justify-start gap-2 w-full">
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
            </div>
            <div className="grow ">
                <div className="flex gap-2">
                    <span className="flex size-[70px] justify-center 
                    rounded-md bg-slate-200 items-center">JP</span>
                    <div className="space-y-2">
                        <span className="block w-[200px] h-[10px] bg-slate-200 p-1 rounded-xl"></span>
                        <span className="block w-[180px] h-[10px] bg-slate-200 p-1 rounded-xl"></span>
                        <span className="block w-[190px] h-[10px] bg-slate-200 p-1 rounded-xl"></span>
                        <span className="block w-[180px] h-[10px] bg-slate-200 p-1 rounded-xl"></span>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <span className="text-[10px] font-bold text-slate-200">Productos</span>
                    </div>
                    <div className="flex flex-wrap max-w-full gap-2">
                        {
                            [1,2,3,4,5,6,7,8,9].map((element,index)=>(
                                <span className="size-[40px] block bg-slate-200" key={index}></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
