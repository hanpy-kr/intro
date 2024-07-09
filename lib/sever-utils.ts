// const os = require("os");
// const memoize = require("lodash.memoize");
// const ServerError = require("./ServerError");

// function splitText(text, length = 100) {
//   return text.split(/(\s)/).reduce((acc, cur) => {
//     const last = acc.pop();

//     if (last && cur.length + last.length > length) {
//       acc.push(last);
//       acc.push(cur);
//     } else {
//       acc.push((last || "") + cur);
//     }
//     return acc;
//   }, []);
// }

// function flatten(obj, options = { limit: 100 }, key_path = [], result = {}) {
//   if (key_path.length >= 5) {
//     // eslint-disable-next-line no-param-reassign
//     result[key_path.join(".")] = "...";
//     console.log("result: ", result);

//     return result;
//   }

//   Object.entries(obj).reduce((acc, [key, val]) => {
//     const path = [...key_path, key];
//     if (val && typeof val === "object" && Object.keys(val).length > 0) {
//       return flatten(val, options, path, acc);
//     }
//     if (options?.limit && val?.length > options?.limit) {
//       const limitVal = `${val.slice(0, options.limit / 2)}…${val.slice(
//         val.length - options.limit / 2
//       )}`;
//       acc[path.join(".")] = limitVal;
//     } else if (val && typeof val === "string" && val.length > 100) {
//       splitText(val, 100).forEach((str, idx) => {
//         acc[`${path.join(".")}[${idx}]`] = str;
//       });
//     } else {
//       acc[path.join(".")] = val;
//     }

//     return acc;
//   }, result);
//   return result;
// }

// function reduceObject(obj) {
//   return Object.entries(obj)
//     .map((v, i, arr) => {
//       if (arr.length <= 20 || i < 10 || i > arr.length - 10) {
//         return v;
//       }
//       if (i === 10) {
//         return ["...", "..."];
//       }
//       return false;
//       Gd;
//     })
//     .filter(Boolean)
//     .reduce((acc, [k, v]) => {
//       acc[k] = v;
//       return acc;
//     }, {});
// }

// // const getLocaleMessages = memoize((locale) => {
// //   try {
// //     // eslint-disable-next-line import/no-dynamic-require, global-require
// //     return require(`../message/${locale}.json`);
// //   } catch (error) {
// //     // eslint-disable-next-line global-require
// //     return require(`../message/en.json`);
// //   }
// // });

// // /**
// //  *
// //  * ERR_CODE_OK       = ‘0000’  # 정상처리 코드
// //  * ERR_CODE_NOTFOUND = ‘1000’  # 모델 / 데이터 등의 자료를 찾지 못했을 경우 (데이터가 잘못된 경우)
// //  * ERR_CODE_PARAM    = ‘1001’  # 파라메터 오류
// //  * ERR_CODE_EXEC     = ‘2000’  # 모듈 실행을 하지 못함
// //  * ERR_CODE_IO       = ‘3000’  # 외부 연동에 실패함
// //  * ERR_CODE_GLOBAL   = ‘9999’  # 알수 없거나 정의되지 않음 오류
// //  * @param {*} res
// //  * @returns
// //  */
// // function withServerRes(req, res) {
// //   res.sendJson = function loggedSend(data) {
// //     if (
// //       (process.env.DISPLAY_API_LOG || "false") !== "false" &&
// //       req.url.startsWith("/api/")
// //     ) {
// //       if (
// //         process.env.DISPLAY_API_LOG === "verbose" ||
// //         !req.url.startsWith("/api/v2/task/")
// //       ) {
// //         console.table({
// //           _TYPE_: "REQ",
// //           method: req.method,
// //           url: req.url,
// //           ...(req.query ? flatten({ query: req.query }) : {}),
// //           ...(req.body ? flatten({ body: req.body }) : {}),
// //         });

// //         if (data)
// //           console.table({
// //             _TYPE_: "RES",
// //             method: req.method,
// //             url: req.url,
// //             ...reduceObject(flatten({ body: data })),
// //           });
// //       }
// //     }
// //     if (data?.head?.code !== undefined) {
// //       // get locale header or cookey
// //       const locale = req?.headers?.locale || req?.cookies?.locale || "en";
// //       // load memoize message
// //       const messages = getLocaleMessages(locale);
// //       // change message
// //       // eslint-disable-next-line no-param-reassign
// //       data.head.message = messages[`${data.head.code}`] || data.head.message;
// //       // eslint-disable-next-line no-param-reassign
// //       data.head.server = os.hostname();
// //     }
// //     res.json(data);
// //   };

// //   res.ok = function ok(body = {}) {
// //     if (body && !Array.isArray(body) && typeof body === "object") {
// //       const {
// //         code = "0000",
// //         message = "정상적으로 처리 되었습니다.",
// //         ...restBody
// //       } = body;

// //       res.sendJson({
// //         head: {
// //           code: code || "0000",
// //           message: message || "정상적으로 처리 되었습니다.",
// //         },
// //         body: restBody,
// //       });
// //       return;
// //     }

// //     res.sendJson({
// //       head: {
// //         code: "0000",
// //         message: "정상적으로 처리 되었습니다.",
// //       },
// //       body,
// //     });
// //   };

// //   res.notFound = function ok(body = {}) {
// //     res.status(200).sendJson(ServerError.Not_Found(body));
// //   };

// //   res.notExec = function ok(body = {}) {
// //     res.status(200).sendJson(ServerError.Not_Exec(body));
// //   };

// //   res.errIO = function ok(body = {}) {
// //     res.status(200).sendJson(ServerError.IO_Error(body));
// //   };

// //   res.errData = function ok(body = {}) {
// //     res.status(200).sendJson(ServerError.Data_Error(body));
// //   };

// //   res.error = function ok(body = {}) {
// //     res.status(200).sendJson(ServerError.Unknown_Error(body));
// //   };

// //   res.noParam = function ok(param) {
// //     res.status(200).sendJson(ServerError.Parameter_Error(null, param));
// //   };

// //   res.invalidParam = function ok(param, subMessage) {
// //     res
// //       .status(200)
// //       .sendJson(ServerError.Parameter_Error(null, param, subMessage));
// //   };

// //   return res;
// // }

// module.exports = {
//   // withServerRes,
//   flatten,
// };
export {};
