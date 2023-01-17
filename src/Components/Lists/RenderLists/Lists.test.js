import { screen, render } from "@testing-library/react";
import Lists from "./Lists";

describe("List of Courses Component", () => {
  const setup = () => render(<Lists />);

  describe("Course list Section", () => {
    test("existence test for course heading", () => {
      setup();
      const titles = screen.getAllByRole("heading");
      expect(titles[0]).toHaveTextContent("Available Courses");
    });
  });

  describe("Course list Request", () => {
    test("should return list of courses", async () => {
      setup();
      const courses = await screen.findAllByRole("generic");
      expect(courses).not.toHaveLength(0);
    });
  });
});

describe("List of Teachers Component", () => {
  const setup = () => render(<Lists />);

  describe("Teacher list Section", () => {
    test("existence test for the word teachers", () => {
      setup();
      const property = screen.getByText(/teachers/i);
      expect(property).toBeInTheDocument();
    });
  });

  describe("Teacher list Request", () => {
    test("should return list of teachers", async () => {
      setup();
      const teachers = await screen.findAllByRole("generic");
      expect(teachers).not.toHaveLength(0);
    });
  });
});
