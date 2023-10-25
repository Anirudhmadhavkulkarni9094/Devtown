import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';


const allProducts = [
  {
    "id": 21,
    "name": "Leather Recliner Sofa",
    "category": "Furniture",
    "price": 699.99,
    "rating": 4.6,
    "image": "Leather"
  },
  {
    "id": 22,
    "name": "Queen-size Bed Frame",
    "category": "Furniture",
    "price": 399.99,
    "rating": 4.3,
    "image": "QueenSize"
  },
  {
    "id": 23,
    "name": "Dining Table with Chairs",
    "category": "Furniture",
    "price": 499.99,
    "rating": 4.5,
    "image": "DiningTable"
  },
  {
    "id": 24,
    "name": "Coffee Table",
    "category": "Furniture",
    "price": 79.99,
    "rating": 4.1,
    "image": "coffeeTable"
  },
  {
    "id": 25,
    "name": "Accent Armchair",
    "category": "Furniture",
    "price": 149.99,
    "rating": 4.4,
    "image": "Armchair"
  },
  {
    "id": 26,
    "name": "Office Desk",
    "category": "Furniture",
    "price": 119.99,
    "rating": 4.2,
    "image": "officeDesk"
  },
  {
    "id": 27,
    "name": "Bookshelf",
    "category": "Furniture",
    "price": 69.99,
    "rating": 4.0,
    "image": "bookshelf"
  },
  {
    "id": 28,
    "name": "Wardrobe Closet",
    "category": "Furniture",
    "price": 199.99,
    "rating": 4.7,
    "image": "wardrobe"
  },
  {
    "id": 29,
    "name": "Lounge Chair",
    "category": "Furniture",
    "price": 249.99,
    "rating": 4.6,
    "image": "lounge"
  },
  {
    "id": 30,
    "name": "Bar Stools",
    "category": "Furniture",
    "price": 79.99,
    "rating": 4.3,
    "image": "barstool"
  },
  {
    "id": 11,
    "name": "Men's Hoodie",
    "category": "Clothing",
    "price": 29.99,
    "rating": 4.4,
    "image": "mens-hoodie"
  },
  {
    "id": 12,
    "name": "Women's Sweater",
    "category": "Clothing",
    "price": 39.99,
    "rating": 4.5,
    "image": "womens-sweater"
  },
  {
    "id": 13,
    "name": "Jeans Classic Fit",
    "category": "Clothing",
    "price": 49.99,
    "rating": 4.3,
    "image": "jeans-classic-fit"
  },
  {
    "id": 14,
    "name": "Running Shoes",
    "category": "Clothing",
    "price": 59.99,
    "rating": 4.1,
    "image": "running-shoes"
  },
  {
    "id": 15,
    "name": "Summer Dress",
    "category": "Clothing",
    "price": 34.99,
    "rating": 4.2,
    "image": "summer-dress"
  },
  {
    "id": 16,
    "name": "Men's Dress Shirt",
    "category": "Clothing",
    "price": 24.99,
    "rating": 4.0,
    "image": "mens-dress-shirt"
  },
  {
    "id": 17,
    "name": "Yoga Leggings",
    "category": "Clothing",
    "price": 19.99,
    "rating": 4.6,
    "image": "jeans-classic-fit"
  },
  {
    "id": 18,
    "name": "Winter Coat",
    "category": "Clothing",
    "price": 79.99,
    "rating": 4.7,
    "image": "winter-coat"
  },
  {
    "id": 19,
    "name": "Athletic Sneakers",
    "category": "Clothing",
    "price": 44.99,
    "rating": 4.4,
    "image": "athletic-sneakers"
  },
  {
    "id": 20,
    "name": "Designer Handbag",
    "category": "Clothing",
    "price": 129.99,
    "rating": 4.8,
    "image": "designer-handbag"
  },
  {
    "id": 1,
    "name": "Smartphone X",
    "category": "Electronics",
    "price": 699.99,
    "rating": 4.5,
    "image": "phone"
  },
  {
    "id": 2,
    "name": "Smartwatch Pro",
    "category": "Electronics",
    "price": 249.99,
    "rating": 4.2,
    "image": "smart-watch"
  },
  {
    "id": 3,
    "name": "Laptop Ultra",
    "category": "Electronics",
    "price": 1199.99,
    "rating": 4.8,
    "image": "laptop"
  },
  {
    "id": 4,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "price": 149.99,
    "rating": 4.3,
    "image": "wireless"
  },
  {
    "id": 5,
    "name": "Smart TV 55\"",
    "category": "Electronics",
    "price": 899.99,
    "rating": 4.6,
    "image": "tv"
  },
  {
    "id": 6,
    "name": "Mirrorless Camera",
    "category": "Electronics",
    "price": 599.99,
    "rating": 4.4,
    "image": "camera"
  },
  {
    "id": 7,
    "name": "Smart Speaker",
    "category": "Electronics",
    "price": 79.99,
    "rating": 4.0,
    "image": "echo"
  },
  {
    "id": 8,
    "name": "Tablet Pro",
    "category": "Electronics",
    "price": 399.99,
    "rating": 4.7,
    "image": "phone"
  },
  {
    "id": 9,
    "name": "Gaming Console",
    "category": "Electronics",
    "price": 349.99,
    "rating": 4.5,
    "image": "gaming-console"
  },
  {
    "id": 10,
    "name": "Wireless Router",
    "category": "Electronics",
    "price": 89.99,
    "rating": 4.1,
    "image": "router"
  },
  // You can continue to add more products as needed
];

console.log(allProducts);


  


function Main({ AddCart, cart ,remove, add , sum}) {
  const [filteredProducts, setFilteredProducts] = useState("All");
  const [progressValue, setProgressValue] = useState(600);

  let displayedProducts = allProducts;

  if (filteredProducts !== "All") {
    displayedProducts = allProducts.filter(item => item.category === filteredProducts && item.price <= progressValue );
  }
  else{
    displayedProducts = allProducts.filter(item=>item.price <= (progressValue=== 0 ? 700 : progressValue))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
     
      <div className="lg:col-span-1 hidden lg:block">
        <Sidebar
          setFilteredProducts={setFilteredProducts}
          setProgressValue={setProgressValue}
          progressValue={progressValue}
        />
      </div>
      <div className="lg:col-span-4 col-span-1 bg-slate-600">
        <Home cart={cart} AddCart={AddCart} allProducts={displayedProducts} remove={remove} add={add} sum={sum} />
      </div>
    </div>

  );
}

export default Main;