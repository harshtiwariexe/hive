import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseGetWorkspacesProps {
  id: Id<"workspaces">;
}

export const useGetWorkspace = ({ id }: UseGetWorkspacesProps) => {
  const data = useQuery(api.workspaces.getByID, { id });
  const isLoading = data == undefined;

  return { data, isLoading };
};
