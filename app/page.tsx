import Product from "@/components/Product";
import Image from "next/image";
import { useState } from "react";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products :Product[]=await res.json();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <section className="flex flex-col space-y-12 pb-44">
      <h1 className="text-center text-5xl font-bold">DEALS OF THE DAY</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      
        {products.map((product)=> (
          <Product key={product.id} product={product}/>
        ))}
        </div>
       
    
      </section>
    </div>
  );
}
