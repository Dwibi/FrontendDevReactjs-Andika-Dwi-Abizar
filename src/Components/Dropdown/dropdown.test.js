import Dropdown from "./Dropdown";
import { fireEvent, render, screen, act } from "@testing-library/react";

describe("Dropdown component", () => {
  it("Should render a dropdown div with a label", () => {
    render(
      <Dropdown label="Test Dropdown">
        <div>Dropdown Content</div>
      </Dropdown>
    );

    expect(screen.getByText("Test Dropdown")).toBeInTheDocument();
  });
  it("Should show children if label click", () => {
    render(
      <Dropdown label="Test Dropdown">
        <div>Dropdown Content</div>
      </Dropdown>
    );

    const dropdownElement = screen.getByText("Test Dropdown");

    fireEvent.click(dropdownElement);

    expect(screen.getByText("Dropdown Content")).toBeInTheDocument();
  });
  it("Should be close the dropdown when the user clicks outside the dropdown", () => {
    render(
      <Dropdown label="Test Dropdown">
        <div>Dropdown Content</div>
      </Dropdown>
    );

    // Open the dropdown
    fireEvent.click(screen.getByText("Test Dropdown"));

    // Use act to handle asynchronous behavior
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Click outside the component
      fireEvent.mouseDown(document.body);
    });

    // Assert that the dropdown is closed
    expect(screen.queryByText("Dropdown Content")).toBeNull();
  });
});
