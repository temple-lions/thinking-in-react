import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCategoryRow from "./ProductCategoryRow"; // Import the component

describe("ProductCategoryRow Component", () => {
  test("renders ProductCategoryRow component correctly with category", () => {
    // Define the category for testing
    const category = "Electronics";

    // Render the component with the defined category
    render(
      <table>
        <tbody>
          <ProductCategoryRow category={category} />
        </tbody>
      </table>
    );

    // Assert that the component renders with the correct category
    const categoryElement = screen.getByText(category);
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement.tagName).toBe("TH");
    expect(categoryElement).toHaveAttribute("colSpan", "2");
  });
});
