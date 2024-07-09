const _axios = require("axios");
// const { flatten } = require("./server-utils");

const instance = _axios.create({
  timeout: 30000,
});

export async function axios(info: any) {
  // const { url, ...options } = info;
  // console.log(url);
  // console.log(options);
  // const { method = "get", body, headers } = options;
  // console.log(".>>>>> url, ", url);
  // if ((process.env.DISPLAY_API_LOG || "false") !== "false") {
  //   try {
  //     console.table({
  //       _TYPE_: "FETCH",
  //       method,
  //       url,
  //       // ...(headers ? flatten({ headers }) : {}),
  //       // ...(body && typeof body === "string" && !headers.encrypt
  //       //   ? flatten({ body: JSON.parse(body) })
  //       //   : {}),
  //     });
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // }
  // console.log(url, options);
  return instance(info);
}
export default axios; // import axios
// export { axios }; // import { axios }
