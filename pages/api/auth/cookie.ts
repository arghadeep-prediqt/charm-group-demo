/* eslint-disable @typescript-eslint/no-explicit-any */
// Router:  /api/auth/cookie

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const savedCookie = req.cookies.authUser;

  if (savedCookie) {
    const parsedCookie = JSON.parse(savedCookie);
    // console.log(parsedCookie);

    return res.status(200).send({ ...parsedCookie });
  }

  return res.status(400).send({ message: "Logged out" });
}
