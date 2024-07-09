// server side api

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "../axios";

async function getGithubAccessToken(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  if (
    code &&
    process.env.GITHUB_AUTHORIZE_CLIENT_ID &&
    process.env.GITHUB_AUTHORIZE_CLIENT_SECRET
  ) {
    // 방어 코드는 나중에 error code 만든 후에 셋팅
  }
  try {
    const { data } = await axios.post(
      `${process.env.GITHUB_ORIGIN_URI}/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_AUTHORIZE_CLIENT_ID,
        client_secret: process.env.GITHUB_AUTHORIZE_CLIENT_SECRET,
        code: code,
      },
      {
        headers: { Accept: "application/json" },
      }
    );
    // const { data } = await axios({
    //   url: `https://github.com/login/oauth/access_token`,

    //   method: "post",
    //   body: {
    //     client_id: process.env.GITHUB_AUTHORIZE_CLIENT_ID,
    //     client_secret: process.env.GITHUB_AUTHORIZE_CLIENT_SECRET,
    //     code: code,
    //   },
    // });

    return data;
  } catch (err: any) {
    console.log(err.message);
  }

  res.end();
}

// module.exports = {
//   getGithubAccessToken,
// };
export { getGithubAccessToken };
