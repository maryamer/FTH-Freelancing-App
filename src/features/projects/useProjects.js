import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/projectServie";

export default function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
