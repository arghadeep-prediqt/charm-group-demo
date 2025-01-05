/* eslint-disable @typescript-eslint/no-explicit-any */
// Router: /api/auth?token=[token]&name=[name]

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { token } = req.query;

  // console.log({  token });

  // It will set cookie based on the params
  if (token) {
    const cookeString = JSON.stringify({ token });

    res.setHeader(
      "Set-Cookie",
      `authUser=${cookeString}; Expires=${new Date(
        Date.now() + 43200000
      )}; Max-Age=43200; Path=/; HttpOnly`
    );
    return res
      .status(200)
      .send(JSON.stringify({ message: "Cookie has been set." }));
  }

  // If any param not found, then it will clear cookie
  res.setHeader("Set-Cookie", "authUser=; Max-Age=0; Path=/; HttpOnly");
  return res.status(200).send("Cookie has been deleted.");
}
