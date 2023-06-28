import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    //test if the input element of role textbox is present in the code
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();
    const bioElement = screen.getByRole("textbox", { name: "BIO" });
    expect(bioElement).toBeInTheDocument();
    //test if the select element of role combobox is present in the code
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    //test if the input element of role checkbox is present in the code
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
    //test if the submit  element of role button is present in the code
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
    //test if the heading elements of role heading are present in the code
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();
    //test if the input element of role textbox is present in the code
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();
    //test if the input element associated to the label is present in the code
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();
    //test if the input element associated to the placeholder is present in the code
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();
    //test if the p element is present
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
    //test if the input element associated to the value is present
    const nameElement4 = screen.getByDisplayValue("esra");
    expect(nameElement4).toBeInTheDocument();
    //test if the img element associated to the alt value is present
    const imageElement = screen.getByAltText("rose");
    expect(imageElement).toBeInTheDocument();
    //test if the element associated to the title value is present
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();
    //test if the element associated to the id value is present
    const customElement = screen.getByTestId("customHTML");
    expect(customElement).toBeInTheDocument();
    //exerice
    const paragraphElement1 = screen.getByText("all fields", { exact: false });
    expect(paragraphElement1).toBeInTheDocument();
    const paragraphElement2 = screen.getByText(/all fields/i);
    expect(paragraphElement2).toBeInTheDocument();
    const paragraphElement3 = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement3).toBeInTheDocument();
  });
});
