import Navbar from "@/ui/Navbar";
import React, { ReactNode } from "react";
import "@/styles/globals.css"

export default function LayoutMain({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar title="Exhibit" />
      {children}
    </div>
  );
}
