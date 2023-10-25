import React from 'react';

function Sidebar({ setFilteredProducts, setProgressValue, progressValue }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setFilteredProducts(selectedCategory);
  }

  const handleScroll = (event) => {
    // Adjust the scrolling sensitivity as needed
    const scrollSensitivity = 5;
    setProgressValue((prevValue) => {
      const newValue = prevValue - event.deltaY * scrollSensitivity;
      // Ensure the value stays within the desired range (adjust as needed)
      if (newValue < 0) return 0;
      if (newValue > 600) return 600;
      return newValue;
    });
  }

  return (
    <div
      className='flex flex-col gap-10 items-center p-10 bg-slate-900 h-screen sticky top-0 text-black'
      onWheel={handleScroll}
    >
      <select onChange={handleCategoryChange} className='px-5 py-2 outline-none rounded-xl font-mono font-semibold'>
        <option value="All">All products</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
      </select>
      <h1 className='text-white'>Select Price range $<span>{progressValue}</span></h1>
      <input
        type="range"
        id="myRange"
        value={progressValue}
        min="0"
        max="600"
        onChange={(e) => setProgressValue(e.target.value)}
        className="w-full appearance-none h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg"
        style={{
          '--thumb-color': 'blue', // Set the color of the thumb here
        }}
      />
    </div>
    
  )
}

export default Sidebar;
