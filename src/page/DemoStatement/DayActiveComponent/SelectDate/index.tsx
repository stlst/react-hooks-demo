import React from "react";
export const SelectDate = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <div>
      <button onClick={() => onChange("2018-10-10")}>今日</button>
      <button onClick={() => onChange("2018-10-09")}>昨日</button>
      <button onClick={() => onChange("2018-10-11")}>明日</button>
    </div>
  );
};
