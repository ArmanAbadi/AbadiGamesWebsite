import { NextApiRequest, NextApiResponse } from "next";
export const runtime = 'nodejs'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  res.status(200).json({ email });
};

export default handler;
