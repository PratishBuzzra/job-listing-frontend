import React, { useState } from 'react'

const FilterCategory = () => {
    const category = [
        "All Jobs",
        "Remote",
        "Full-time",
        "Internship"
    ]
    const [activeCat, setActiveCat] = useState("All Jobs");
  return (
    <div className='w-full max-w-6xl mx-auto px-8 md:px-10 lg:px-8 '>
        <div className='flex items-center flex-wrap gap-3 md:gap-5 py-6 md:py-8 justify-center md:justify-start'>
            {
                category.map((cat, index)=>(
                    <button key={cat} onClick={()=>setActiveCat(cat)} className={`px-3 md:px-4 py-2 text-sm md:text-base text-black rounded-2xl ${activeCat === cat ? "bg-green-800 text-white" : "border"}`}>{cat}</button>
                ))
            }
        </div>
      
    </div>
  )
}

export default FilterCategory
