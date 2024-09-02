

export default function SectionUseright() {



  return (
    <div>
        <div className="flex shadow-lg flex-col overflow-hidden absolute top-[10px] -right-[50px] 
        rounded-md border border-slate-100 bg-slate-400 bg-opacity-50 h-[300px] w-[300px] px-2">
            <div className="py-2 flex items-center justify-end gap-2 w-full">
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
                <span className="w-[20px] h-[20px] bg-slate-100 rounded-full"></span>
            </div>
            <div className="overflow-hidden flex gap-2 items-center border-b pt-1 pb-2 border-slate-400 w-full">
                <span className="bg-slate-400 rounded-lg px-2 text-[11px] text-slate-100 font-medium">
                    online
                </span>
                <span className="bg-slate-400 rounded-lg px-2 text-[10px] text-slate-100 font-medium">
                    offline
                </span>
                <span className="bg-slate-400 rounded-lg px-2 text-[10px] text-slate-100 font-medium">
                    popular
                </span>
                <span className="bg-slate-400 rounded-lg px-2 text-[10px] text-slate-100 font-medium">
                    otros
                </span>
            </div>
            <div className="w-full grow overflow-hidden py-2 space-y-2">
                {
                    ['JP','AL','A','Be','JF','L'].map((element,index)=>(
                        <div className="p-1 bg-white shadow-md rounded-md" key={index}>
                            <div className="flex gap-2">
                                <span className="rounded-full size-[40px] flex items-center justify-center
                                 bg-slate-300 text-[11px]"
                                >{element}</span>
                                <div className="grow space-y-1 flex flex-col">
                                    <span className="block w-[200px] h-[10px] bg-slate-300 p-1 rounded-xl"></span>
                                    <span className="block w-[180px] h-[10px] bg-slate-300 p-1 rounded-xl"></span>
                                    <span className="block w-[190px] h-[10px] bg-slate-300 p-1 rounded-xl"></span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <span className="text-green-600 text-[10px]">
                                    ver
                                </span>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}
