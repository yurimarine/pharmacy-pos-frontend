"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const items = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      items: [],
    },
    {
      title: "Inventory",
      url: "/admin/inventory",
      items: [{ title: "All Items", url: "/admin/inventory" }],
    },
    {
      title: "Product",
      url: "/admin/product",
      items: [
        { title: "All Products", url: "/admin/product" },
        { title: "Generic", url: "/admin/content/generic" },
        { title: "Manufacturer", url: "/admin/content/manufacturer" },
        { title: "Supplier", url: "/admin/content/supplier" },
      ],
    },
    {
      title: "Pharmacy",
      url: "/admin/pharmacy",
      items: [
        { title: "Overview", url: "/admin/pharmacy" },
        { title: "Reports", url: "/admin/pharmacy/reports" },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      items: [
        { title: "General", url: "/admin/settings/general" },
        { title: "Billing", url: "/admin/settings/billing" },
        { title: "Notifications", url: "/admin/settings/notifications" },
      ],
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Documentation</span>
                <span>v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={<Link href={item.url} />}
                  isActive={pathname === item.url}
                >
                  <span className="font-medium">{item.title}</span>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          render={<Link href={subItem.url} />}
                          isActive={pathname === subItem.url}
                        >
                          {subItem.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
