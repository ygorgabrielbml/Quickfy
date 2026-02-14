"use client"

import { logout } from "../../login/actions";

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-white/10 py-4 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-indigo-600 to-indigo-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">Q</span>
        </div>
        <span className="text-white text-xl font-semibold">Quickfy</span>
      </div>
      <div className="flex items-center gap-5 text-gray-400">
        <p className="text-sm">Hi! Admin</p>
        <button 
          onClick={() => logout()}
          className="border border-white/20 rounded-full text-sm px-4 py-1.5 hover:bg-white/5 transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
