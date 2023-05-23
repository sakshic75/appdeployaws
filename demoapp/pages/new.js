import axios from "axios";
import { ProductForm } from "components/ProductForm";
import { Layout } from "components/Layout";

function NewPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <ProductForm />
      </div>
    </Layout>
  );
}
export default NewPage;

export const getServerSideProps = async (context) => {
  const baseUrl = process.env.baseUrl;
  const res = await axios.get(`${baseUrl}/api/products`);

  return {
    props: {
      products: res.data,
    },
  };
};
