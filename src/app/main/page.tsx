"use client";
import { useCreateWorkspaceModal } from "@/features/workspace/store/use-create-workspaces-modal";
import { useGetWorkspaces } from "@/features/workspace/api/use-get-workspaces";
import { UserButton } from "@clerk/clerk-react";
import React, { useEffect, useMemo } from "react";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkspaces();
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();

  const workspaceID = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceID) {
      router.replace(`/workspace/${workspaceID}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceID, isLoading, open, setOpen, router]);

  if (!isAuthenticated) {
    router.push("/");
  }

  return (
    <div>
      <UserButton />
    </div>
  );
}
