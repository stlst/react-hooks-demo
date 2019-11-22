import { shallow } from "enzyme";
import { SelectDate } from ".";
import React from "react";

it("should render SelectDate", () => {
  const onChange = jest.fn();
  const wrapper = shallow(<SelectDate onChange={onChange}></SelectDate>);
  const button = wrapper.find(".test-button");

  button.simulate("click");

  expect(button.text()).toBe("今日");
  expect(onChange).toHaveBeenCalledWith("2018-10-10");
});
