import { screen, render } from "@testing-library/react";
import CounterTwo from "./counterTwo";

describe("Counter two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });
  //we don't care about the functions increment and decrement, all we need to test is that they are fired when the buttons are clicked, so we are going to use mock functions from jest to test
  test("handlers are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
  });
});
