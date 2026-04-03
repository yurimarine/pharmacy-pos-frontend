import Sidebar from "@/components/sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left: Sidebar */}
      <Sidebar />

      {/* Right: Page content */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
