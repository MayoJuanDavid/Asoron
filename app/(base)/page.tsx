import ProductList from "@/components/lists/product-list";
import getCurrentUser from "@/lib/actions/get-current-user";

const placeholder_data = [
  {
    name: "Santa Teresa 1796",
    price: 0,
  },
  {
    name: "Cacique",
    price: 0,
  },
  {
    name: "Superior",
    price: 0,
  },
  {
    name: "Cinco Estrellas",
    price: 0,
  },
  {
    name: "Pampero Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
  {
    name: "Cinco Estrellas Blanco",
    price: 0,
  },
];

const fetchData = async () => {
  return placeholder_data;
};

const Home = async () => {
  const products = await fetchData();
  const user = await getCurrentUser();

  return <ProductList data={products} user={user} />;
};

export default Home;
