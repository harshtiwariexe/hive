"use client";

import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";
import { useWorkspaceID } from "@/hooks/use-workspace-id";

export const WorkspaceIdPage = () => {
  const workspaceID = useWorkspaceID();
  const { data } = useGetWorkspace({ id: workspaceID });
  return (
    <>
      <div>ID : {JSON.stringify(data)}</div>
    </>
  );
};
export default WorkspaceIdPage;
