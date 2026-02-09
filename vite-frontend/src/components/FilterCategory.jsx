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
    <div className='w-full max-w-6xl mx-auto'>
        <div className='flex items-center flex-wrap gap-5 py-8'>
            {
                category.map((cat, index)=>(
                    <button key={cat} onClick={()=>setActiveCat(cat)} className={`px-4 py-2  text-black rounded-2xl ${activeCat === cat ? "bg-green-800 text-white" : "border"}`}>{cat}</button>
                ))
            }
        </div>
      
    </div>
  )
}

export default FilterCategory
