import styles from './App.module.css';

import ProductPreviewCard from './components/product-preview-card/ProductPreviewCard';

function App() {
  return (
    <div className={styles.app}>
      <ProductPreviewCard />
    </div>
  );
}

export default App;
