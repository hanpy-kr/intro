import axios from "axios";
import { useQuery } from "react-query";
import { GithubRepos, queryKeys } from "./types";

/**
 * 다른 사람이 사용 할수도 있다 판단하여, queryKeys활용하여 분리
 */
const getGithubReposById = (id: string): Promise<GithubRepos[]> =>
  axios
    .get(`https://api.github.com/users/${id}/repos`)
    .then((response) => response.data);

export const useGithubRepos = (id: string) => {
  return useQuery(queryKeys.githubRepoById(id), () => getGithubReposById(id));
};
