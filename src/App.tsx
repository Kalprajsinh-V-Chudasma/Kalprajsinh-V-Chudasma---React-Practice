import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import About from "@/Pages/About"

function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mt-4">Hello!</h1>
      <p className="text-muted-foreground mt-2">Welcome to my website!</p>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col flex-1 p-4">
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  )
}
