// import { serverAuthentication } from "@/lib/auth/server-authentication";
// import { useEffect, useState } from "react";

const analyze = (props: any) => {
  // const [repo, setRepo] = useState([]);
  // useEffect(() => {
  //   if (props.github && props.token) {
  //     props.github
  //       .getRepository(props.token)
  //       .then((repos: []) => setRepo(repos));
  //   }
  // }, [props.github]);

  return (
    <div>
      <h1>임시</h1>
      Analyze 페이지
      <div>repo</div>
      {/* <div>{JSON.stringify(repo)}</div> */}
    </div>
  );
};

export default analyze;

// export const getServerSideProps = serverAuthentication((context: any) => {
//   const { token } = context.query;

//   // console.log('context.req.cookies["token"]');
//   // console.log(context.req.cookies["token"]);

//   return {
//     props: {
//       token: token ?? null,
//     },
//   };
// });
