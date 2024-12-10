"use client";
import { useCreateWorkspaceModal } from "@/features/workspace/store/use-create-workspaces-modal";
import { useGetWorkspaces } from "@/features/workspace/api/use-get-workspaces";
import { UserButton } from "@clerk/clerk-react";
import React, { useEffect, useMemo } from "react";

export default function Page() {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkspaces();

  const workspaceID = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceID) {
      console.log("Workspace modal");
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceID, isLoading, open, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
