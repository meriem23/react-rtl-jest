import Skills from "./skills";
import { render, screen, logRoles } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["html", "css", "js", "ts"];
  test("render", () => {
    render(<Skills skills={skills} />);
    //test if the component contains an element with a role list
    const listElemetnt = screen.getByRole("list");
    expect(listElemetnt).toBeInTheDocument();
  });
  test("renders list of skills", () => {
    render(<Skills skills={skills} />);
    //test if the component contains elements with the role list item
    const listItemElemetnts = screen.getAllByRole("listitem");
    expect(listItemElemetnts).toHaveLength(skills.length);
  });
  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    //test if the button with name Login is present in the DOM
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  //make sure that the start learning button is NOT rendered
  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton1 = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton1).not.toBeInTheDocument();
  });
  //make sure that the start learning button IS rendered
  test("start learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const startLearningButton2 = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton2).toBeInTheDocument();
  });
});
