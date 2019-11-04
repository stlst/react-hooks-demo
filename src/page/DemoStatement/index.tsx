import { DatePicker } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { format } from "util";
import { useStore } from "../../storeHooks/useTodoList";
import { DayActiveComponent } from "./DayActiveComponent";
import { SelectUser } from "./SelectBranch";
export enum USER_TYPE {
  "SUPER_ADMIN" = "SUPER_ADMIN",
  "ADMIN" = "ADMIN",
  "USER" = "USER",
  "LOGIN_USER" = "LOGIN_USER"
}
export const DemoStatement = () => {
  const [selectedUser, setSelectedUser] = useState(USER_TYPE.ADMIN);

  const [date, setDate] = useState(moment("2019-09-02", format("YYYY-MM-DD")));

  const onSelectChange = (e: any) => {
    console.log("onSelectChange", e.target.value);
    setSelectedUser(e.target.value as USER_TYPE);
  };

  // 选择用户角色
  // 触发下方数据卡片的数据fetch：用户角色的切换，日期的切换
  // 触发下方数据图表的fetch: 用户角色的切换，日期的切换

  const store = useStore();
  const onClickBtn = () => {
    store.todoStore.updateList("12121");
    store.todoStore.flag = !store.todoStore.flag;
    store.todoStore.number += 1;
  };

  const onChange = (newDate: moment.Moment | null) => {
    console.log("date", newDate, newDate!.format("YYYY-MM-DD"));
    setDate(newDate!);
  };
  return (
    <div>
      <SelectUser onChange={onSelectChange} />

      <DayActiveComponent selectedUser={selectedUser} />
      <button onClick={onClickBtn}>button</button>
      <DatePicker defaultPickerValue={date} onChange={onChange} value={date} />
    </div>
  );
};
