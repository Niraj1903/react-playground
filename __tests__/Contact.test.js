import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for contact comonents", () => {
  it("should check if component is loaded or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should check the submit button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should check by placeholder", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("Name");

    expect(placeholder).toBeInTheDocument();
  });

  it("should check for multiple input type", () => {
    render(<Contact />);

    const mulPlaceHolder = screen.getAllByRole("textbox");
    expect(mulPlaceHolder).toHaveLength(2);
  });
});
