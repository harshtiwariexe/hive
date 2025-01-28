import { UserButton } from "@clerk/clerk-react";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarButton } from "./sidebar-button";
import { Bell, Home, MessageCircle, MoreHorizontal } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="h-full w-[70px] flex flex-col gap-y-4 items-center pt-[9px] pb-4 bg-[#433878]">
      <WorkspaceSwitcher />
      <SidebarButton icon={Home} label="Home" isActive/>
      <SidebarButton icon={MessageCircle} label="Message" />
      <SidebarButton icon={Bell} label="Notification" />
      <SidebarButton icon={MoreHorizontal} label="More"/>
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
