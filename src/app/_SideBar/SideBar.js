"use client";
import { useEffect, useState } from "react";
import { UserIcon, FolderGit2Icon, GalleryVerticalEnd } from "lucide-react";
import FooterComponents from "./Footer";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "About Me",
    url: "#aboutme",
    icon: UserIcon,
  },
  {
    title: "Personal Projects",
    url: "",
    icon: FolderGit2Icon,
    items: [
      { title: "ETF Forge", url: "#etfforge", icon: GalleryVerticalEnd },
      { title: "gldcswpy", url: "#gldcswpy", icon: GalleryVerticalEnd },
      { title: "using_gldcswpy", url: "#ugldcswpy", icon: GalleryVerticalEnd },
      { title: "Weekly Regime", url: "#weeklyreg", icon: GalleryVerticalEnd },
      { title: "Fraud Detection", url: "#fraudetct", icon: GalleryVerticalEnd },
    ],
  },
];

function MenuItem({ item, activeHash }) {
  const isActive = item.url && activeHash === item.url;
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <a
          href={item.url || "#"}
          className="flex items-center gap-2 font-medium"
        >
          <item.icon className="w-4 h-4" />
          {item.title}
        </a>
      </SidebarMenuButton>
      {item.items?.length ? (
        <SidebarMenuSub>
          {item.items.map((subItem) => {
            const isSubActive = subItem.url && activeHash === subItem.url;
            return (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton asChild isActive={isSubActive}>
                  <Link
                    href={subItem.url}
                    className="flex items-center gap-2 text-sm"
                  >
                    <subItem.icon className="w-3.5 h-3.5" />
                    {subItem.title}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            );
          })}
        </SidebarMenuSub>
      ) : null}
    </SidebarMenuItem>
  );
}

export function AppSidebar(props) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const ids = items.flatMap((item) =>
      item.url
        ? [item.url.slice(1)]
        : [].concat(item.items?.map((i) => i.url.slice(1)) || [])
    );

    const observerCallback = (entries) => {
      const visibleSections = entries
        .filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.5
        )
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        const id = visibleSections[0].target.id;
        setActiveHash("#" + id);
        window.history.replaceState(null, "", "#" + id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: [0.5],
    });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="rounded-t-3xl">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#" className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Kavya Annapareddy</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="rounded-b-3xl rounded-t-none">
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <MenuItem key={item.title} item={item} activeHash={activeHash} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"flex items-center"}>
        <FooterComponents />
      </SidebarFooter>
    </Sidebar>
  );
}
