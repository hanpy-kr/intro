import { useGithubRepos } from "@/hooks/github/useGithubRepos";

type GithubRepoListProps = {
  email: string | null;
};

/**
 * GithubRepoList 컴포넌트 설명
 * 기능
 * 1. InputSearch component에서 debounce를 사용하여 0.8초 마다 업데시트된 email을 API 호출을 통해 데이터를 받아옴
 * 2. useGithubRepos에서 데이터를 email 값에 따라 데이터를 가지고 온다.
 */
const GithubRepoList = ({ email }: GithubRepoListProps) => {
  const { data, isLoading } = email
    ? useGithubRepos(email)
    : { data: [], isLoading: "" };

  if (!email) return <div>email을 입력해 주세요</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h2>{email}</h2>
      <div>
        {data?.map((repo: any) => (
          <div key={repo.id}>
            <p>PJ name : {repo.name}</p>
            <p>html_url : {repo.html_url}</p>
            <p>clone_url : {repo.clone_url}</p>
            <hr />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default GithubRepoList;
