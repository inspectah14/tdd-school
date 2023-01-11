import { screen, render } from "@testing-library/react";
import TeacherList from "./TeacherList";

describe("TeacherList Component", () => {
  const setup = () => render(<TeacherList />);

  describe("TeacherList Section", () => {
    test("existence test for Teacher heading", () => {
      setup();
      const title = screen.getByRole("heading");
      expect(title).toHaveTextContent(/teachers/i);
    });

    test("existence test for the word teacher", () => {
      setup();
      const property = screen.getByText(/teachers/i);
      expect(property).toBeInTheDocument();
    });
  });

  describe("TeacherList Request", () => {
    test("should return list of teachers", async () => {
      setup();
      const teachers = await screen.findAllByRole("generic");
      expect(teachers).not.toHaveLength(0);
    });
  });
});
