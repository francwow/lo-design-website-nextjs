"use client";

import { useProduct } from "@/contexts/ContextHooks";
import Image from "next/image";

const ProductItems = () => {
  const { product, setProduct } = useProduct();

  return (
    <div className={product ? "product-item active" : "product-item"}>
      <div className="close-btn">
        <button onClick={() => setProduct(null)}>x</button>
      </div>
      {product?.imgSrc !== undefined && product?.alt !== undefined ? (
        <div className="product-item-img">
          <Image
            src={product?.imgSrc}
            alt={product?.alt}
            width={500}
            height={500}
          />
        </div>
      ) : null}
      <h2>{product?.headingES}</h2>
    </div>
  );
};

export default ProductItems;
