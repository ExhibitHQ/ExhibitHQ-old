import "@/styles/globals.css"
import Navbar from "@/ui/Navbar";
import { ReactNode } from "react";

export default function LayoutLanding({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar title="Exhibit" className="fixed" />
      {children}
    </div>
  );
}
