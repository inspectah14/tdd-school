import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AddCourseForm from "./AddCourseForm";

describe("Add Course Page", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <AddCourseForm />
      </MemoryRouter>
    );

  test("should have a title input field", () => {
    setup();
    const titleInput = screen.getByLabelText(/course title/i);
    expect(titleInput).toBeInTheDocument();
  });
});
