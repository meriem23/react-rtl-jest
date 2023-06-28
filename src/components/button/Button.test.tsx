import { render, screen, fireEvent, logRoles } from '@testing-library/react'
import Button from './Button'
import { replaceCamelWithSpaces } from './Button'

// test("button has correct initial color and updates when clicked", () => {
//   const { container } = render(<Button />);
//   logRoles(container);
//   //find an element with a role of button and text of "change to blue"
//   const colorButton = screen.getByRole("button", { name: "change to blue" });
//   //expect the background color to be red
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
//   //click the button and change the bg color and have the correct text
//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
//   expect(colorButton).toHaveTextContent("change to red");
// });

// test("initial conditions", () => {
//   render(<Button />);
//   //check that the button starts out enabled
//   const colorButton = screen.getByRole("button", {
//     name: "change to blue",
//   });
//   expect(colorButton).toBeEnabled();
//   //check that the checkbox starts ou unchecked
//   const checkBox = screen.getByRole("checkbox");
//   expect(checkBox).not.toBeChecked();
// });

// test("testing that checkbox is enabled and disabled", () => {
//   render(<Button />);
//   const colorButton = screen.getByRole("button", { name: "change to blue" });
//   const checkbox = screen.getByRole("checkbox", { name: "Disable checkbox" });
//   //check that checkbox is enabled
//   fireEvent.click(checkbox);
//   expect(checkbox).toBeEnabled();
//   //check that checkbox is desabled
//   fireEvent.click(checkbox);
//   expect(checkbox).toBeDisabled;
// });

// test("testing that the button background color is gray when the button is disabled", () => {
//   render(<Button />);
//   const colorButton = screen.getByRole("button", { name: "change to blue" });
//   const checkbox = screen.getByRole("checkbox", { name: "Disable checkbox" });
//   //check background color gray
//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
//   //check background color red
//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "red" });
//   //change background color to blue disable and then re-enable button
//   fireEvent.click(colorButton);
//   fireEvent.click(checkbox);
//   expect(checkbox).toBeEnabled();
//   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
// });

//UNIT TESTING OF A FUNCTION
// describe("spaces before camel case capital letters", () => {
//   test("no inner capital letters", () => {
//     //run a function
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });
//   test("1 inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });
//   test("multiple inner capital letters", () => {
//     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });

//NEW COLORS
test('button has correct initial color and updates when clicked', () => {
  const { container } = render(<Button />)
  logRoles(container)
  //find an element with a role of button and text of "change to MidnightBlue"
  const colorButton = screen.getByRole('button', {
    name: 'change to Midnight Blue',
  })
  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
  //click the button and change the bg color and have the correct text
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton).toHaveTextContent('change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<Button />)
  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'change to Midnight Blue',
  })
  expect(colorButton).toBeEnabled()
  //check that the checkbox starts ou unchecked
  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()
})

test('testing that checkbox is enabled and disabled', () => {
  render(<Button />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable checkbox' })
  //check that checkbox is enabled
  fireEvent.click(checkbox)
  expect(checkbox).toBeEnabled()
  //check that checkbox is desabled
  fireEvent.click(checkbox)
  expect(checkbox).toBeDisabled()
})

test('testing that the button background color is gray when the button is disabled', () => {
  render(<Button />)
  const colorButton = screen.getByRole('button', {
    name: 'change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable checkbox' })
  //check background color gray
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  //check background color MediumVioletRed
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
  //change background color to MidnightBlue disable and then re-enable button
  fireEvent.click(colorButton)
  fireEvent.click(checkbox)
  expect(checkbox).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})
describe('spaces before camel case capital letters', () => {
  test('no inner capital letters', () => {
    //run a function
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('1 inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
