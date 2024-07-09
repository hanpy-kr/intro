import type { NextApiRequest, NextApiResponse } from "next";
import { getGithubAccessToken } from "@/lib/auth/github";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") res.end();
  if (req.method === "GET") {
    try {
      const { access_token } = await getGithubAccessToken(req, res);
      res.setHeader(
        "set-cookie",
        `token=${access_token}; path=/; samesite=strict; httponly; secure;`
      );
      return res.redirect(`/analyze`);
    } catch (error) {
      console.error("error: ", error);
      // 임시
      res.status(200).json(new Error());
    }
  }
}
