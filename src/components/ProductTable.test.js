import { render, screen } from "@testing-library/react";
import ProductTable from "./ProductTable";

test("renders ProductTable component correctly", () => {
  const products = [
    {
      category: "Category 1",
      name: "Product 1",
      price: "$19.99",
      stocked: true,
    },
    {
      category: "Category 2",
      name: "Product 2",
      price: "$29.99",
      stocked: false,
    },
    // Add more test data as needed...
  ];

  render(
    <ProductTable products={products} filterText="" inStockOnly={false} />
  );

  const productNames = screen.getAllByText(/Product \d/);
  const productPrices = screen.getAllByText(/\$\d+\.\d+/);

  expect(productNames).toHaveLength(products.length);
  expect(productPrices).toHaveLength(products.length);

  // Add more specific assertions if needed, such as checking for category names
});
