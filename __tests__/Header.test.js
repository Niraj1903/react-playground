import Header from "../src/components/Header";
import { render, screen } from "@testing-library/react";

it("should test if header component is loading with login button", () => {
  render(<Header />);
  const headerLogin = screen.getByRole("button");
  expect(headerLogin).toBeInTheDocument();
});
