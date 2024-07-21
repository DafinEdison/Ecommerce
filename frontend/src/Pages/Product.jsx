import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrump from "../Components/Breadcrumps/Breadcrump";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RealtedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));
  return (
    <div>
      <Breadcrump product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RealtedProducts/>
    </div>
  );
};

export default Product;
