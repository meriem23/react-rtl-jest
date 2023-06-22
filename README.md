REACT TESTING LIBRARY
link: https://testing-library.com/docs/react-testing-library/intro/

1/ Jest VS RTL : we use them together
*JEST : it's a JS testing framework called a "test runner": it finds test, runs it and determines whether the tests passed or failed . It then gives back a human readable report.
*RTL : it's a JS testing libraby: it provides a virtual DOM to test React Components. It interacts with the VDOM and verify the behaviour of the RC.

2/ 3 types of tests:
\*Unit Tests: focused on individual blocks/units of an app like class / functions / components. Each block is tested isolated / independent from other blocks and the dependencies are mocked (we fake them).
It runs in a short amount of time and make it easy to pinpoint failures and it's also easier to write and maintain than other type of tests.

\*Intergration Tests: focused on a combination of blocks/units and esure that they work well together.
It takes longer to write or run than unit tests

\*End to end Tests (E2E Tests): focused on testing the entire app flow and ensures it works as it's supposed to from start to end.
It envolves a real UI, APIs and DB and that's why it takes the longest as it covers the most amount of code and can have a cost ( using real apis)

3/ WHAT TEST SHOULD I WRITE?
Follow the testing pyramid: unit -> integration -> E2E

4/ RTL Philosophy : How the component behavious when a user interacts with it
A mix between Unit tests (component level - easy to write ) and E2E tests (resemble the way a user would interact/use the app)
With RTL we are NOT concerned about the implementation details of a component ( how it is updating state / rendering a text ... )
Any refactoring done to the component will not affect the test as long as the result / output is the SAME.

5/WHAT IS AN AUTOMATED TEST?
It's a piece of code to test the app code. It throws an error when the actual output doesn't match the expected output.

////////////////////////////////////

Jest and RTL are already present when creating a React project.
Run the command "npm test" to run the test script.

1/Functions

test(name,fct,timeout) OR it(name,fctntimeout) =>
name: test name used to identify the test
fct: function that contains the expectations to test
tiemout: optional arg to specify how long before abording the test. Default timeout is 5s.

*RTL methods :
-render : RTL creates a VDOM of the component to test using the render method from RTL : exp :
render(<App /> ) // render (<MainComp />)
-screen: it's an object that contains methods that carry the VDOM : exp :
getByText(/learn react/i) : that text is expected to be found in the tested component / i => ignores lower and upper cases
OR
getByText("learn react") : this format is case sensitive
*Jest : test and expect are methods from JEST that we don't need to import

2/Test Driver Development ( TDD ) : it's a software development process where you write to test BEFORE writing the code.
It's also called red-gress testing.
It has 3 Phases :
1.Creates the test that verify the functionality of a specific feature, all test are going to fail at this point.
2.Write the software code that will run the tests successfully when re-executed
3.Refactor the code for optimization while ensuring the tests continue to pass

////////////////////////////////////

Jest:

1/Watch Mode:  
It's an option passed to Jest to watch files that have changed since the last commit and execute test changes only related to them.
It's an optimizationb designed to make tests run fast regardless of how many tests there are in the App.
We can run all tests , only changed files by selecting the option in the command link ( press w ).

2/Functions:
test.only('',()=>{}) OR fit('',()=>{}) => Jest will only run this test in the suite (file ) of tests
test.skip('',()=>{}) OR xit('',()=>{}) => Jest will skip this test in the suite (file ) of tests

describe(name,fct) => used to groupe tests together
we can use .skip and .only with describe => describe.skip()
we can nest describe in another describe

Filename Conventions:
Any file with these suffix will be run as a test file : .test.js / .test.jsx / .spec.js / .spec.tsx or any file in folder named '**tests**'

Code Coverage:
It help understand how much of the code is tested.
1/Statement coverage: how many of statemets have been executed,
2/Branches coverage: how many of branches have been executed,
3/Function coverage: how many of functions have been called,
4/Line coverage: how many of code lines have been tested.
HOW?
Add in th package.json this script "coverage":"npm run test -- --coverage ."

Assertion:
They decide if a test passes of fails.They are carried out with the expect method.
expect(value) => the argument is the value that the code produces.
We add to expect a "matcher" function to assert something about a value, the matcher accepts an argument which is the correct expected value.
example of assertion :
expect(textElement).toBeInTheDocument();

Link for Jest matchers : https://github.com/sapegin/jest-cheat-sheet
Link for Jest DOM matchers :https://github.com/testing-library/jest-dom

////////////////////////////////////

WHAT TO TEST?
1- Test that component renders,
2- Test that component renders with props,
3- Test that component renders in different states,
4- Test that component reacts to events.

WHAT NOT TO TEST?
1- Implementation details,
2- Third party code,
3- Code not important from a user point of view.

////////////////////////////////////

RTL Queries:
Every test written generally involves these basic steps:
1-Render the component,
2-Find an element rendered by the component,
3-Assert against the element found in step 2 which will pass or fail the test.

Queries are the methods provided by RTL to find elements on the page, there are different types:
1/ to find 1 element we have : getBy.. , queryBy.. , findBy..
2/ to find multiple elements we have : getAllBy.. , queryAllBy.. , findAllBy..

The suffix can be : Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Tile and TestId

**_getByRole_**
Elements like have roles like anchor has a link role, h1 to h6 have a heading role etc ...
To know all the roles for each element you can check : https://www.w3.org/TR/html-aria/#docconformance
getByRole Options:

- When 2 or more elements (tags) have the same role and we run a test on that role we get an error
  "Found multiple elements with the role "...." ", to avoid that issue we can add options to the method:
  1/ name option : getByRole("roleType",{name:VALUE}) : the value can be :
- label of a form element
- text content of a button
- value of the aria-label attribute
  2/ level option : specific to headings (h1 -> h6) we can use the level key to specify the level of the heading:
  for an h1 we can say getByRole("heading",{level:1})
  3/There are other options that can be used : https://testing-library.com/docs/queries/byrole/#options

**_getByLabelText_**
Will search for the label that matches the given text and find the element (tag) associated with that label.
getByLabelText Option:

- When 2 or more elements have the same label we can use the "selector" option to define the selector associated to the label:
  getByLabelText("Name", { selector: "input" }) => we will look for the input element associated to the label "Name"

**_getByPlaceholderText_**
Will search for all elements with a placeholder attribute and find one that matches the giver text.
getByPlaceholderText("Fullname")

**_getByText_**
Will search for all elements that have a text node with text content matching the given text , it's used to find paragraph, div or span elements
It accepts an option of selector just like the getByLabelText.

**_getByDisplayValue_**
Returns the input, textarea or select element that has the matching displayed value.

**_getByAltText_**
Will return the element that has the given alt text, works with elements that accepts the alt attribute like img , input , area ..

**_getByTitle_**
Returns the element that has the matching title attribute.
<span title="close">X</span>
screen.getByTitle("close")

**_getByTestId_**
Returns the element that has the matching data-testid attribute.

 <div data-testid="customHTML">custome HTML element</div>
 screen.getByTestId("customHTML")

Priority Order for Queries
Test should resemble how user interacts with the code as mush as possible so the recemmanded order is :
1- getByRole
2- getByLabel Text - good for form fields
3- getByPlaceholderText
4- getByText - good for div , span and p elements
5- getByDisplayValue - good for form fields
6- getByAltText - if you have an element that supports the alt attributes
7- getByTitle
8- getByTestId
////////////////////////////////////
RTL getAllBy Queries
Find multiple elements in the DOM, it returns an array for all matching nodes and throws an error if no elements matches.
All getBy queries have a corresponding getAllBy queries.

**_getAllByRole_**
const listItemElemetnts = screen.getAllByRole("listitem");
expect(listItemElemetnts).toHaveLength(skills.length);
////////////////////////////////////
For all the methods, we pass a first argument that is of type 'TextMatch'.
It's a type that can be:
1-String :
2-Regex
3-Custom Function
For example, we have <div>Hello World </div>:
1/
screen.getByText("Hello World") //full string match
screen.getByText("llo Worl",{exact:false}) //substring match
screen.getByText("hello world",{exact:false}) //ignore case
2/
screen.getByText(/World/) //full string match
screen.getByText(/world/i) //substring match, ignore case
screen.getByText(/^hello world$/i) //full string match, ignore case
3/(content?:string, element?:Element|null)=>boolean
screen.getByText((content)=>content.startsWith('Hello'))
////////////////////////////////////
**_queryBy and queryAllBy_**
To test that a certain element is NOT rendered by the DOM, we use queryBy and qeuryAllBy:
-They return the matching node for a query and return null/empty array if no elements match,
-Usefull for asserting an element that is not present
-Throws an error is more than one match is found
Example:
const startLearningButton = screen.queryByRole("button", {name: "Start learning"});
expect(startLearningButton).not.toBeInTheDocument();
\*\*queryBy and queryAllBy match all the getBy and getAllBy knowen methods
////////////////////////////////////
**_findBy and findAllBy_**
To test that a certain element will be eventually rendered in the DOM, we use findBy and findAllBy:
-Returns a promise which resolves when an element is found which matches the given query,
-The promise is rejected if no element is found after a default timeout of 1000ms.
findBy has a default timeout of 1000 ms but it can take an argument with the wanted time.
test("start learning button is eventually displayed", async () => {
render(<Skills skills={skills} />);
const startLearningButton2 = await screen.findByRole(
"button",{name: "Start learning",},{timeout: 2000,});
expect(startLearningButton2).toBeInTheDocument();
});
////////////////////////////////////
SUMMARY
\*\* getBy and getAllBy class of queries are used to assert (check) if elements are present in the DOM.
\*\* queryBy and queryAllBy class of queries are used to assert (check) if elements are NOT present in the DOM.
\*\* findBy and findAllBy class of queries are used to assert (check) if elements are WILL BE present in the DOM at some point.
////////////////////////////////////
Debugging
-We can use the debug method to visualize the DOM before the test occuring: screen.debug();
-We can print out a list of all the implicit aria roles within a DOM with the function logRoles
const view = render(<Skills skills={skills} />)
logRoles(view.container)
////////////////////////////////////
User Interactions
When a user inetracts with the software ( click / keypress ...), software has to respond and tests should ensure that the interactions are handled as expected.
To test user ineteractions we use a library called "user-event"; it simulated the interaction by dispatching the events if the interaction took place in a browser. All user event APIs are asynchronous.
call user.setup() first then render the tested component and write the needed tests.
We can use APIs to simulate some interactions!
for example: user.click() to simulate a click on a button.
Pointer Interactions APIs:
\*\*Convenience APIs:

- click()
- dbClick ()
- tripleClick()
- hover()
- unhover()

\*\*Pointer APIs:

- pointer({keys:'[MouseLeft]'}) : simulates left click
- pointer({keys:'[MouseLeft][mouseright]'}) OR pointer('[MouseLeft][mouseright]'): simulate left click followed by a right click
- pointer({keys:'[MouseLeft>]'}) : simulates press a button withou release
- pointer({keys:'[/MouseLeft]'}) : simulates release a previously presse button

  Keyboard Interactions APIs:

  \*\*Utility APIs:

- type(): simultes change the value of an editable element,
- clear(): simulates clear an editable element,
- selectOptions(): simulates select elements in a dropdown or list box,
- deselectOptions(): simulates deselect elements in a dropdown or list box,
- upload(): simulates a file being uploaded

\*\*Convenience API:

- tab(): simulates the tab keyboard key

\*\*Clipboard APIs:

- copy(),
- cut(),
- paste()

  ////////////////////////////////////
  SEE THE TEST APP FOR MORE INFORMATION
  ////////////////////////////////////
