class Github {
  constructor(httpClient) {
    this.github = httpClient;
  }
  async getRepository(token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await this.github.get("user/repos", {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });
    return response.data.items;
  }
  async search() {}
}
export default Github;
