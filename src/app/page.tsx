import React from 'react';
import Hero from './componenets/Hero';
import Upprice from './componenets/Upprice/Upprice';
import Lowprice from './Lowprice/Lowprice';
import AllProduct from './componenets/AllProducts/Allproducts';

const Home = () => {
  return (
    <div>
<Hero></Hero>
<Upprice></Upprice>
<Lowprice></Lowprice>
<AllProduct></AllProduct>
    </div>
  );
};

export default Home;