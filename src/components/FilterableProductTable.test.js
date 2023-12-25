import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterableProductTable from "./FilterableProductTable";

describe("FilterableProductTable Component", () => {
  const products = [
    { name: "Product 1", stocked: true, price: "$19.99" },
    { name: "Product 2", stocked: false, price: "$29.99" },
    // Add more sample products as needed for testing variations
  ];

  test("renders FilterableProductTable component correctly", () => {
    render(<FilterableProductTable products={products} />);

    const searchBar = screen.getByPlaceholderText("Search...");
    const inStockCheckbox = screen.getByLabelText(
      "Only show products in stock"
    );

    expect(searchBar).toBeInTheDocument();
    expect(inStockCheckbox).toBeInTheDocument();
  });

  test("updates state on input change", () => {
    render(<FilterableProductTable products={products} />);

    const searchBar = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchBar, { target: { value: "Product 1" } });

    expect(searchBar.value).toBe("Product 1");
  });

  test("filters products based on input", () => {
    render(<FilterableProductTable products={products} />);

    const searchBar = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchBar, { target: { value: "Product 1" } });

    const productNames = screen.getAllByText("Product 1");
    expect(productNames).toHaveLength(1);
    expect(productNames[0]).toHaveTextContent("Product 1");
  });

  test("filters products based on checkbox", () => {
    render(<FilterableProductTable products={products} />);

    const inStockCheckbox = screen.getByLabelText(
      "Only show products in stock"
    );
    fireEvent.click(inStockCheckbox);

    const productNameElements = screen.getAllByText(/Product \d/); // Adjust the regex to match your product names

    // Filter out elements based on visibility using Testing Library utilities
    const visibleProductElements = productNameElements.filter(
      (element) =>
        // eslint-disable-next-line testing-library/no-node-access
        window.getComputedStyle(element.closest("tr")).display !== "none"
    );

    expect(visibleProductElements.length).toBe(1); // Assuming there's only one in-stock product in the test data
  });
});
