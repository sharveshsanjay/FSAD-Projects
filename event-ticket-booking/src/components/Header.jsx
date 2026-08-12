import React from "react";
import { Ticket, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center text-center py-8 px-4 overflow-hidden mb-6">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      
      <div className="flex items-center gap-3 mb-2 animate-bounce-slow">
        <div className="bg-gradient-to-tr from-indigo-500 to-purple-500 p-2.5 rounded-2xl shadow-lg shadow-indigo-500/20">
          <Ticket className="w-8 h-8 text-white" />
        </div>
        <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-300">
        Internal Department Event
      </h1>
      
      <p className="mt-2 text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">
        Online Ticket Booking System
      </p>
      
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4" />
    </header>
  );
}
