import { cleanup, fireEvent, render } from "@testing-library/react";
import CheckBoxWithLabel from "../CheckBoxWithLabel";

// Note: running cleanup afterEach is done automatically in @testing-library/react@9.0.0+
// afterEach(cleanup); // Unnecessary,using  @testing-library/react@16.x

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckBoxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});