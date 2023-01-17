import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Form from "./Form";

describe("Add Teacher Form", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

  test("should have a first name input field", () => {
    setup();
    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput).toBeInTheDocument();
  });
});
