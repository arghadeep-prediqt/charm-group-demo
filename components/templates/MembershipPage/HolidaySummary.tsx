import React from "react";

function HolidaySummary() {
  const date = new Date();
  const rowData = [
    {
      title: `Opening Balance as on 01/01/${date.getFullYear()}`,
      value: "14.00",
    },
    {
      title: `Current Year Entitlement - ${date.getFullYear()}`,
      value: "7.00",
    },
    { title: "Lapsed", value: "0.00" },
    { title: "Utilized", value: "0.00" },
    { title: "Account Balance as on Date", value: "21.00" },
  ];
  return (
    <div className="my-3">
      <div className="mb-3 px-4 py-2 flex justify-between items-center bg-amber-100">
        <div className="w-10/12">
          <p className="text-p2-b">Summary</p>
        </div>
        <div className="w-2/12">
          <p className="text-p2-b text-center">Nights</p>
        </div>
      </div>
      {rowData?.map((item, id) => (
        <BodyRow key={id} {...item} />
      ))}
    </div>
  );
}

export default HolidaySummary;

interface BodyRowProps {
  title: string;
  value: string;
}

function BodyRow({ title, value }: BodyRowProps) {
  return (
    <div className="px-4 py-2 flex justify-between items-center">
      <div className="w-10/12">
        <p className="text-p2-m">{title}</p>
      </div>
      <div className="w-2/12">
        <p className="text-p2-r text-center">{value}</p>
      </div>
    </div>
  );
}
