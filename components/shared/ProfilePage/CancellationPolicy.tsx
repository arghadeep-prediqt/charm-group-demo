import React from "react";

interface CancellationPolicy {
  noticeTime: string;
  holidaysDebited: string;
}

const CancellationPolicy: React.FC = () => {
  const policies: CancellationPolicy[] = [
    {
      noticeTime:
        "Between 4 Months To 16 Days Notice Prior To The Start Date Of Holiday",
      holidaysDebited: "100% Of Holidays Booked",
    },
    {
      noticeTime:
        "Between 15 Days To 8 Days Prior To The Start Date Of The Holiday",
      holidaysDebited: "50% Of Holidays Booked",
    },
    {
      noticeTime: "Less Than 7 Days Prior To The Start Date Of The Holiday",
      holidaysDebited: "0% Of Holidays Booked",
    },
  ];

  return (
    <div className="p-6 border border-gray-200 shadow-sm rounded-2xl">
      <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
        <span className="mr-2">✖</span> Cancellation of Confirmed Holiday
      </h2>
      <p className="text-gray-700 mb-6">
        We are sure that you will not cancel your holidays unless and until it
        is absolutely necessary and unavoidable. However, if you cancel your
        booked holiday without adequate notice, it will be difficult to find
        alternative members willing to go on those dates and the space cannot be
        utilized.
      </p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left text-sm font-medium">
              Notice Time Of Cancellation (Regular Inventory)
            </th>
            <th className="border border-gray-300 p-2 text-left text-sm font-medium">
              No Of Holidays Debited From Membership
            </th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-300 p-2 text-sm">
                {policy.noticeTime}
              </td>
              <td className="border border-gray-300 p-2 text-sm">
                {policy.holidaysDebited}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-blue-500 mt-4">
        *Above cancellation policy is for Regular holidays (holidays using the
        Annual entitlement of 7 days)
      </p>
    </div>
  );
};

export default CancellationPolicy;
