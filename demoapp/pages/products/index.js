import axios from "axios";
import { Layout } from "components/Layout";
import { ProductCard } from "components/ProductCard";

function ProductsPage({ products = [] }) {
  const renderProducts = () => {
    if (products.length === 0) return <h1>No Products</h1>;
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export default ProductsPage;

export const getServerSideProps = async () => {
  try {
    const baseUrl = process.env.baseUrl;
    const { data: products } = await axios.get(`${baseUrl}/api/products`);

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
};
