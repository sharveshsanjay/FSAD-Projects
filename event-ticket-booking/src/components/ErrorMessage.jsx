import React from "react";
import { AlertCircle } from "lucide-react";

export default function ErrorMessage({ message }) {
  if (!message) return null;
  
  return (
    <div className="flex items-center gap-1.5 mt-1.5 text-rose-400 text-xs font-semibold animate-fadeIn">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
