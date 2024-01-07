import Sidebar from "@/app/components/Sidebar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex relative">
          <Sidebar />
          <main className="flex-1 flex ml-[var(--min-sidebar-width)] h-screen">{children}</main>
      </div>
    )
  }