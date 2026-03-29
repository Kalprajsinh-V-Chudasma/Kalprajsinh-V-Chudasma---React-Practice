import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col flex-1 p-4">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold mt-4">Hello from App!</h1>
        <p className="text-muted-foreground mt-2">Your sidebar is now working.</p>
      </main>
    </SidebarProvider>
  )
}
