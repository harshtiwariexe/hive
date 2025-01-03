import { useParams } from "next/navigation";
import { Id } from "../../convex/_generated/dataModel";

export const useWorkspaceID = () => {
  const params = useParams();
  return params.workspaceID as Id<"workspaces">;
};
