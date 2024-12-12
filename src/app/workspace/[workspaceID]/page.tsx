interface WorkspaceIdPageProps {
  params: {
    workspaceID: string;
  };
}

export const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return (
    <>
      <div>Hi : {params.workspaceID}</div>
    </>
  );
};
export default WorkspaceIdPage;
