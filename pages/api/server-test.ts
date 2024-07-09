// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

// export default async function handle(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") res.end();
//   if (req.method === "GET") {
//     try {
//       res.json({
//         head: {
//           code: "0000",
//           message: "정상적으로 처리 되었습니다.",
//         },
//         body: await getCode(req, res),
//       });
//     } catch (error) {
//       console.error("error: ", error);
//       res.status(200).json(new Error());
//     }
//   }
// }
