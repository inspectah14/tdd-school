import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

  describe("Header Sections", () => {
    test("header element existence test", () => {
      setup();
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
    });
  });
});
