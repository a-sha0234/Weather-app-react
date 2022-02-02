//imports
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../Form";

//------------------------------------------------------------------------------------------
// test on page text
//------------------------------------------------------------------------------------------

describe("check text is on screen", () => {
  //block of tests
  test("check search button is exists ", () => {
    render(<Form />);
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("check label exists", () => {
    render(<Form />);
    const labelElement = screen.getByText(/Name of City/i);
    expect(labelElement).toBeInTheDocument();
  });
});
