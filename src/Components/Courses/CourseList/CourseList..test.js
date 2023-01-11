import { screen, render } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList Component", () => {
  const setup = () => render(<CourseList />);

  describe("CourseList Section", () => {
    test("existence test for Course heading", () => {
      setup();
      const title = screen.getByRole("heading");
      expect(title).toHaveTextContent(/courses/i);
    });
  });

  describe("CourseList Request", () => {
    test("should return list of courses", async () => {
      setup();
      const courses = await screen.findAllByRole("generic");
      expect(courses).not.toHaveLength(0);
    });
  });
});
