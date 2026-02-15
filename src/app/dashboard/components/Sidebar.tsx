"use client"

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const dashboardIcon = (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
  </svg>
);

const overviewIcon = (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
  </svg>
);

const chatIcon = (
  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
  </svg>
);

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard", icon: dashboardIcon },
  { name: "Visão Geral", path: "/dashboard/overview", icon: overviewIcon },
  { name: "Chat", path: "/dashboard/chat", icon: chatIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`border-r border-white/10 min-h-screen pt-4 flex flex-col bg-black/20 backdrop-blur-sm transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mx-4 mb-4 p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`}>
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      {sidebarLinks.map((item, index) => (
        <a
          href={item.path}
          key={index}
          className={`flex items-center py-3 px-4 gap-3 transition-all ${
            pathname === item.path
              ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-400"
              : "hover:bg-white/5 border-transparent text-gray-400 hover:text-gray-300"
          }`}
        >
          {item.icon}
          <p className={`${isCollapsed ? 'hidden' : 'block'}`}>{item.name}</p>
        </a>
      ))}
    </div>
  );
}
