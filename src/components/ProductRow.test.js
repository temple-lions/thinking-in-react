import React from "react";
import { render, screen } from "@testing-library/react";
import ProductRow from "./ProductRow"; // Import the component

describe("ProductRow Component", () => {
  test("renders ProductRow component correctly with stocked product", () => {
    const product = {
      name: "Example Product",
      stocked: true,
      price: "$9.99",
    };

    render(
      <table>
        <tbody>
          <ProductRow product={product} />
        </tbody>
      </table>
    );

    const productNameElement = screen.getByText(product.name);
    expect(productNameElement).toBeInTheDocument();
    expect(productNameElement.tagName).toBe("TD");
    expect(screen.getByText(product.price)).toBeInTheDocument();
  });

  test("renders ProductRow component correctly with in-stock product", () => {
    const inStockProduct = {
      name: "In Stock Product",
      stocked: true,
      price: "$9.99",
    };

    render(
      <table>
        <tbody>
          <ProductRow product={inStockProduct} />
        </tbody>
      </table>
    );

    const productNameElement = screen.getByText(inStockProduct.name);

    expect(productNameElement).toBeInTheDocument();
    expect(productNameElement.tagName).toBe("TD");
    expect(screen.getByText(inStockProduct.price)).toBeInTheDocument();
  });

  test("renders ProductRow component correctly with out-of-stock product", () => {
    const outOfStockProduct = {
      name: "Out of Stock Product",
      stocked: false,
      price: "$19.99",
    };

    render(
      <table>
        <tbody>
          <ProductRow product={outOfStockProduct} />
        </tbody>
      </table>
    );

    const productNameElement = screen.getByText(outOfStockProduct.name);

    expect(productNameElement).toBeInTheDocument();
    expect(productNameElement.tagName).toBe("SPAN");
    expect(productNameElement).toHaveStyle({ color: "red" });
    expect(screen.getByText(outOfStockProduct.price)).toBeInTheDocument();
  });
});
