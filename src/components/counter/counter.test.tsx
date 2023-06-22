import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  //basic testing
  test("Counter renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });
  //test initial state of component
  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });
  //test user interactions
  test("renders a count of 1 after clicking button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    //simulate clicking on the button one time
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("renders a count of 2 after clicking button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    //simulate clicking on the button twice
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    //put a value in an input
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
  //when tab is pressed the order is increment button / input / set button ; let's test the order ofthe focus
  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput2 = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput2).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

/*EXAMPLES*/

/*clear()*/
// test("clear",async()=>{
//     render (<Textarea defaultValue="Hello"/>)
//     await userEvent.clear(screen.getByRole('textbox'))
//     expect(screen.getByRole('textbox')).toHaveValue(' ')
//     })

/*selectOptions()*/
// test("selectOptions", async () => {
//   render(
//     <select multiple>
//       <option value="1">A</option>
//       <option value="2">B</option>
//       <option value="3">C</option>
//     </select>
//   );
//   await userEvent.selectOptions(screen.getByRole("listbox"), ["1", "C"]);
//   expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
//   expect(screen.getByRole("option", { name: "B" }).selected).toBe(false);
//   expect(screen.getByRole("option", { name: "C" }).selected).toBe(true);
// });

/*deselectOptions()*/
// test("deselectOptions", async () => {
//   render(
//     <select multiple>
//       <option value="1">A</option>
//       <option value="2" selected>B</option>
//       <option value="3">C</option>
//     </select>
//   );
//   await userEvent.deselectOptions(screen.getByRole("listbox"), "2");
//   expect(screen.getByRole("option", { name: "B" }).selected).toBe(false);
// });

/*upload()*/
// test("upload file", async () => {
//   render(
//     <div>
//       <label htmlFor="file-uploader">upload file:</label>
//       <input type="file" id="file-uploader" />
//     </div>
//   );
//   const file = new File(["hello"], "hello.png", { type: "image/png" });
//   const input = screen.getByLabelText(/upload file/i);
//   await userEvent.upload(input, file);
//   expect(input.files[0]).toBe(file);
//   expect(input.files.item(0)).toBe(file);
//   expect(input.files).toHaveLength(1);
// });
