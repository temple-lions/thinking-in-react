import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCategoryRow from "./ProductCategoryRow"; // Import the component

describe("ProductCategoryRow Component", () => {
  test("renders ProductCategoryRow component correctly with category", () => {
    // Define the category for testing
    const category = "Electronics";

    // Render the component with the defined category
    render(<ProductCategoryRow category={category} />);

    // Assert that the component renders with the correct category
    const categoryElement = screen.getByText(category);
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement.tagName).toBe("TH");
    expect(categoryElement).toHaveAttribute("colSpan", "2");
  });
});
