import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Info, Settings } from "lucide-react"

const navItems = [
  { title: "Home", icon: Home, url: "#" },
  { title: "About", icon: Info, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-3 font-bold text-lg">My App</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-3 text-xs text-muted-foreground">© 2026 My App</div>
      </SidebarFooter>
    </Sidebar>
  )
}