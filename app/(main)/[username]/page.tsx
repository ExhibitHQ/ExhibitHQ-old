import { notFound } from "next/navigation";
import { existsSync } from "fs";
import path from "path";
import React from "react";

interface PageUserProfileProps {
  params: { username: string };
}

export default function PageUserProfile(props: PageUserProfileProps) {
  const { params: { username } } = props;

  const doesExists = existsSync(
    path.resolve(process.cwd(), `data/users/${username}.json`),
  );

  if (!doesExists) notFound();

  return (
    <div>
      <h2>{`${username} --> ${!doesExists || "exists"} ✅`}</h2>
    </div>
  );
}
