"use client";
import { Button } from "@/components/ui/button";
import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";
import { useWorkspaceID } from "@/hooks/use-workspace-id";
import { Info, Search } from "lucide-react";

export const Toolbar = () => {
  const workspaceID = useWorkspaceID();
  const { data } = useGetWorkspace({ id: workspaceID });
  return (
    <nav className="bg-[#433878] flex items-center justify-between h-10 p-1.5 ">
      <div className="flex-1" />
      <div className="min-w-[280px] max-[650px] grow-[2] shrink">
        <Button
          size="sm"
          className="bg-accent/25 hover:bg-accent-25 w-full justify-start h-7 px-2"
        >
          <Search className="text-white size-4 mr-1" />
          <span className="text-white text-xs">Search {data?.name}</span>
        </Button>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant="transparent" size="iconSm">
          <Info className="size-5  text-white" />
        </Button>
      </div>
    </nav>
  );
};
