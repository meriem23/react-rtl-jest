import { render, screen } from "../../test-utils";
import MuiMode from "./muiMode";

describe("MuiMode", () => {
  test("renders test correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
