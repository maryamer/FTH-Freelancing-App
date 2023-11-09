import useProjects from "./useProjects";

function ProjectTable() {
  const { data, isPending, error } = useProjects();
  console.log(data);

  return <div>Project Table</div>;
}
export default ProjectTable;
