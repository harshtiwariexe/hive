import { atom, useAtom } from "jotai";

const createWorkspacesModalAtom = atom(false);

export const useCreateWorkspaceModal = () => {
  return useAtom(createWorkspacesModalAtom);
};
