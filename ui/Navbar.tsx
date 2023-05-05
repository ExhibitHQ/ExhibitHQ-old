import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar({ title }: { title: string }) {
  return (
    <div className="flex h-[56px] items-center justify-around bg-blue-200">
      <h2 className="text-xl font-bold">{title}</h2>
      <NavbarSection>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Profiles</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarSection>
      <NavbarSection></NavbarSection>
    </div>
  );
}

export function NavbarSection({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-8">{children}</div>
  );
}

export function NavbarItem({ children }: { children?: ReactNode }) {
  return <Link href={"#"}>{children}</Link>;
}
