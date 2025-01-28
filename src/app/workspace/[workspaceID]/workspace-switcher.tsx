"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspace/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspace/store/use-create-workspaces-modal";
import { useWorkspaceID } from "@/hooks/use-workspace-id";
import { Loader, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export const WorkspaceSwitcher = () => {
  const router = useRouter();
  const workspaceID = useWorkspaceID();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceID,
  });

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceID,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-9 relative overflow-hidden bg-[#F5EFFF] hover:bg-[#F5EFFF]/80 text-slate-800 font-semibold text-xl">
          {workspaceLoading ? (
            <Loader className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceID}`)}
          className="flex flex-row cursor-pointer justify-between items-center capitalize font-semibold"
        >
          <Button className="size-9 relative overflow-hidden bg-[#433e4b]  text-white font-semibold text-xl">
            {workspaceLoading ? (
              <Loader className="size-5 animate-spin shrink-0" />
            ) : (
              workspace?.name.charAt(0).toUpperCase()
            )}
          </Button>
          {workspace?.name}
          <span className="text-xs text-green-700">Active</span>
        </DropdownMenuItem>
        {filteredWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            className="flex flex-row cursor-pointer justify-between items-center capitalize font-semibold"
            key={workspace._id}
            onClick={() => router.push(`/workspace/${workspace._id}`)}
          >
            <Button className="size-9 relative overflow-hidden bg-[#433e4b] text-white font-semibold text-xl">
              {workspaceLoading ? (
                <Loader className="size-5 animate-spin shrink-0" />
              ) : (
                workspace?.name.charAt(0).toUpperCase()
              )}
            </Button>
            {workspace?.name}
            <span className="text-xs text-red-700 font-semibold">Inactive</span>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="size-9 relative overflow-hidden bg-[#F5EFFF] text-slate-800 font-semibold text-lg rounded-md flex items-center justify-center mr-2">
            <Plus />
          </div>
          Create a new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
