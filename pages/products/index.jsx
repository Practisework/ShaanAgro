import React from "react";
import Data from "../../implement_data";
import Card from "@/components/Card";
const Products = () => {
  return (
    <>
      <div className="container px-0 sm:px-8 py-8 mx-auto">
        <div className="flex flex-wrap m-4">
          {Data.map((val) => {
            return (
              <>
                <Card
                  prodLink={val.nameEng}
                  ImageSrc={val.imgUrl}
                  name={val.nameEng}
                  title={val.name}
                  info={val.content}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
