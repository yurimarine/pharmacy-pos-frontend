import { Bell, Search, ChevronDown } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      
      {/* Left — sidebar trigger + breadcrumb/title */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100" />
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Dashboard
        </span>
      </div>

      {/* Right — actions */}
      <div className="flex items-center gap-1">

        {/* Search */}
        <button className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
          <Search size={15} />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-500 sm:inline dark:border-zinc-700 dark:bg-zinc-800">
            ⌘K
          </kbd>
        </button>

        {/* Notifications */}
        <button className="relative rounded-md p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
          <Bell size={17} />
          {/* Badge */}
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
          </span>
        </button>

        {/* Divider */}
        <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-700" />

        {/* Avatar / User */}
        <button className="flex items-center gap-2 rounded-md px-2 py-1.5 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
            JD
          </div>
          <ChevronDown size={13} className="text-zinc-400" />
        </button>

      </div>
    </header>
  );
}