import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//Normal testing
//  test("Greet renders correctly", () => {
//    render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//    // i => to ignore upper and lower cases
//    //   const textElement = screen.getByText("Hello");
//    expect(textElement).toBeInTheDocument();
//  });

//TDD Testing
//requirements : the component Greet should render the test hello and if a name is passed to the comp it should render hello followed by the name

// test("Greet renders correctly with TDD", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test("Greet renders with  wa name with TDD", () => {
//   render(<Greet name="Esra" />);
//   const textElement = screen.getByText("Hello Esra");
//   expect(textElement).toBeInTheDocument();
// });

//ONLY
// test.only("Greet renders with  wa name with TDD only", () => {
//   render(<Greet name="Esra" />);
//   const textElement = screen.getByText("Hello Esra");
//   expect(textElement).toBeInTheDocument();
// });
//SKIP
// test.skip("Greet renders with  wa name with TDD skip", () => {
//   render(<Greet name="Esra" />);
//   const textElement = screen.getByText("Hello Esra");
//   expect(textElement).toBeInTheDocument();
// });

//DESCRIBE
describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders name", () => {
    render(<Greet name="Esra" />);
    const textElement = screen.getByText("Hello Esra");
    expect(textElement).toBeInTheDocument();
  });
});
