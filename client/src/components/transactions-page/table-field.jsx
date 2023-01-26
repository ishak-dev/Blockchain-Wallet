import React from "react";

const TableField = ({ data }) => {
  return (
    <tr>
      <td>{data.addressFrom}</td>
      <td>{data.addressTo}</td>
      <td>{data.amount}</td>
      <td>{data.timestamp}</td>
    </tr>
  );
};

export default TableField;
