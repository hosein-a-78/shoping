import { Routes, Route, Navigate } from 'react-router-dom';

//Components
import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFound404 from './pages/NotFound404';
//Context
import ProductsProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate />} to="/products" replace />
          <Route path="/products" element={<ProductsPage />} />
          {/* daynamic page */}
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* page error 404 */}
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
};

export default App;