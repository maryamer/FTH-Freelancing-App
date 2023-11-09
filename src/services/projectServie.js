import http from "./httpService";

export function getProjects() {
  return http.get("/project/list").then(({ data }) => data.data);
}
