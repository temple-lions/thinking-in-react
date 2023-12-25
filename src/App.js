import FilterableProductTable from "./components/FilterableProductTable";
import PRODUCTS from "./data/data";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
