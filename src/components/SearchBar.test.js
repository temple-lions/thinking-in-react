import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar"; // Import the component

describe("SearchBar Component", () => {
  test("renders SearchBar component correctly", () => {
    // Define initial props
    const props = {
      filterText: "test",
      inStockOnly: true,
      onFilterTextChange: jest.fn(),
      onInStockOnlyChange: jest.fn(),
    };

    // Render the component with defined props
    render(<SearchBar {...props} />);

    // Assert that the component renders with the correct initial values
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Only show products in stock")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Only show products in stock")).toBeChecked();
  });

  test("handles onChange events correctly", () => {
    // Define mock functions for onChange events
    const onFilterTextChange = jest.fn();
    const onInStockOnlyChange = jest.fn();

    // Render the component with the mock functions
    render(
      <SearchBar
        filterText=""
        inStockOnly={false}
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
    );

    // Simulate onChange event on the checkbox
    const checkbox = screen.getByLabelText("Only show products in stock");

    fireEvent.click(checkbox); // Simulate a click on the checkbox

    // Assert that the onInStockOnlyChange function was called with the correct value
    expect(onFilterTextChange).not.toHaveBeenCalled(); // Ensure this function is not called
    expect(onInStockOnlyChange).toHaveBeenCalledWith(true);
  });
});
