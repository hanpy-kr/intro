import { useState } from "react";
import InputSearch from "@/component/common/InputSearch";
import GithubRepoList from "@/component/GithubRepoList";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/component/common/Layout";
import ErrorBoundary from "@/component/error-boundary/ErrorBoundary";
import SSRSafeSuspense from "@/component/error-boundary/SSRSafeSuspense";
import ErrorAlert from "@/component/error-boundary/ErrorAlert";

/**
 * 전반적인 컴포넌트 구조에 대한 고찰
 * 설명 : 데이터를 받아오는 컴포넌트와 데이터를 보여주는 컴포넌트가 분리되어 있는 경우
 * - InputSearch component : 검색창 으로 github id를 검색하는 컴포넌트
 * - GithubRepoList component : 검색창에서 가져온 email을 받아서 api를 보내고 결과를 보여주는 컴포넌트
 *
 * State 설명
 * - Repo 컴포넌트의 email, setEmail은 InputSearch와 GithubRepoList component의 상위에 위치
 */
const queryClient = new QueryClient();

const Repo = () => {
  const [email, setEmail] = useState<string | null>(null);
  return (
    <Layout>
      <InputSearch setEmail={setEmail} />
      <ErrorBoundary fallbackRender={ErrorAlert}>
        <SSRSafeSuspense fallback={<div>로오딩중</div>}>
          <QueryClientProvider client={queryClient}>
            <GithubRepoList email={email} />
          </QueryClientProvider>
        </SSRSafeSuspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default Repo;
