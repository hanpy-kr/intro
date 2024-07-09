// gssp : getServerSideProps
export function serverAuthentication(fn: any) {
  return async (context: any) => {
    // 임시
    if (!context.req.cookies["token"]) {
      return {
        redirect: {
          permanent: false,
          destination: `/login`,
        },
      };
    }

    return fn({ ...context });
  };
}
