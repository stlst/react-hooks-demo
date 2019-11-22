import { shallow } from "enzyme";
import { SelectDate } from ".";
import React from "react";

it("should render SelectDate", () => {
  const onChange = jest.fn();
  const wrapper = shallow(<SelectDate onChange={onChange}></SelectDate>);
  const button0 = wrapper.find("button").at(0);
  const button1 = wrapper.find("button").at(1);
  const button2 = wrapper.find("button").at(2);

  button0.simulate("click");
  button1.simulate("click");
  button2.simulate("click");

  expect(button0.text()).toBe("今日");
  expect(button1.text()).toBe("昨日");
  expect(button2.text()).toBe("明日");
  expect(onChange).toHaveBeenCalledWith("2018-10-10");
  expect(onChange).toHaveBeenCalledWith("2018-10-09");
  expect(onChange).toHaveBeenCalledWith("2018-10-11");
});
