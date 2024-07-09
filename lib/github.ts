// server-side api
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

async function getGithubRepository(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await axios.post(
      `${process.env.GITHUB_ORIGIN_URI}/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_AUTHORIZE_CLIENT_ID,
        client_secret: process.env.GITHUB_AUTHORIZE_CLIENT_SECRET,
        // code: code,
      },
      {
        headers: { Accept: "application/json" },
      }
    );

    return data;
  } catch (err: any) {
    console.log(err.message);
  }

  res.end();
}

export { getGithubRepository };
