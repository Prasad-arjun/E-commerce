import ProductCard from "../componets/productCard";
import { useGetShopProductsQuery } from "../app/feature/apiSlice/apiSlice";
import { Loading } from "../utils.js/loading";
function Shop() {
const {data ,isLoading,isSuccess}=useGetShopProductsQuery();


  return (
    <>
      {isLoading ? (
     <div className=" w-[100%] h-[100vh] center">
                <Loading />
              </div>
        
      ) : (
        <div className="w-[100%] h-auto center flex flex-wrap justify-around">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              productName={product.title}
              price={Math.round(product.price*82.88)}
              detail={product.description}
              category={product.category}
              url={product.image}
              rating={product.rating.rate}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Shop;
