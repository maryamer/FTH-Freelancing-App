import { useQuery } from "@tanstack/react-query";
import { geProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: geProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
