import Image from "next/image";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

type Product = {
  title: string;
  price: string;
  oldPrice: string | null;
  image: string;
  rating: number;
  reviews: string;
};

const products: Product[] = [
  {
    title: "The north coat",
    price: "$260",
    oldPrice: "$360",
    image: "/bsp1.png",
    rating: 5,
    reviews: "65",
  },
  {
    title: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    image: "/bsp2.png",
    rating: 4,
    reviews: "65",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    image: "/bsp3.png",
    rating: 4,
    reviews: "65",
  },
  {
    title: "Small BookSelf",
    price: "$360",
    oldPrice: null,
    image: "/bsp4.png",
    rating: 5,
    reviews: "65",
  },
];

const ProductsBox = ({ product }: { product: Product }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer">
      <Image src={product.image} width={150} height={100} alt={product.title} />
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
        <FaRegHeart className="text-2xl text-black rounded-full p-1 bg-white" />
        <FiEye className="bg-white" />
      </div>

      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
    </div>
    <h1 className="font-semibold text-base font-sans mb-2 pt-3">{product.title}</h1>
    <div className="flex items-center space-x-2">
      <span className="text-red-500 font-bold">{product.price}</span>
      {product.oldPrice && (
        <span className="text-gray-400 font-bold line-through">
          {product.oldPrice}
        </span>
      )}
    </div>
    <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
      {[...Array(5)].map((_, index) =>
        index < product.rating ? (
          <FaStar key={index} />
        ) : (
          <FaRegStar key={index} />
        )
      )}

      <span className="text-gray-400 text-sm ml-1">{product.reviews}</span>
    </div>
  </div>
);

function SellingProducts() {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
              This Month
            </h3>
            <div className="flex justify-between">
              <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">
                Best Selling Products
              </h1>
              <a
                href="#products"
                className="bg-red-500 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-[10] mt-3 pt-2"
              >
                View All
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-5">
            {products.map((product, index) => (
              <ProductsBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SellingProducts;
