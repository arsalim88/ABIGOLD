// pages/products/[id].js
import { useRouter } from 'next/router';
import productsData from './data/products.json';
import ProductCard from '../../components/ProductDetail';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mencari produk berdasarkan ID
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  return <ProductCard product={product} />;
};

export default ProductDetailPage;