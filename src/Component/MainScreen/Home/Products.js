import React, { useEffect } from 'react'

function Products({AddCart ,cart ,allProducts}) {
    useEffect(()=>{
        console.log(allProducts)
    })
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {allProducts.map(product=>{
            
            return <div key={product.id} className="bg-white text-black rounded-lg shadow-lg m-4 flex flex-col justify-between p-5">
                <img
                   src={require(`../../Asset/${product.category}/${product.image}.png`)}
                  alt=''
                  className="w-fit object-cover rounded-t-lg  h-36 m-auto"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">Price: ${product.price.toFixed(2)}</p>
                  <p className="text-gray-700 mb-2">Rating: {product.rating}</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-xl" 
                  onClick={()=>AddCart({
                    id : product.id,
                    name : product.name,
                    price : product.price ,
                    quantity : 1,
                    img : product.image,
                    category : product.category
                  },
                  console.log(cart)
                  )}>
                    
                    Add to Cart
                  </button>
                </div>
              </div>
            
        })}
    </div>
  )
}

export default Products