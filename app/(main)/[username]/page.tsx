import { notFound } from "next/navigation";
import { existsSync } from "fs";
import path from "path";
import React from "react";
import {
  getDataFromJsonSync,
} from "util/fetch";
import "@/styles/globals.css";

interface PageUserProfileProps {
  params: { username: string };
}

export default async function PageUserProfile(props: PageUserProfileProps) {
  const {
    params: { username },
  } = props;

  const doesExists = existsSync(
    path.resolve(process.cwd(), `data/users/${username}.json`),
  );

  if (!doesExists) notFound();

  const data = getDataFromJsonSync(username);

  const github_data_json: any = await (
    await fetch("https://api.github.com/users/samyabrata-maji/repos")
  ).json();

  return (
    <div>
      <div className="h-[100%] w-[100%] grid grid-cols-[1fr_3fr] grid-rows-1 px-24 py-8 gap-8">
        <div className="h-[100%] grid">
          <img src={data.avatar_url} />
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <h1 className="text-3xl font-semibold">{data.name}</h1>
          <p className="line-clamp-4 text-xl">{data.about}</p>
          <div className="flex flex-row w-[100%] gap-4">
            {data.slugs &&
              data.slugs.map((item: string | undefined, index: number) => (
                <p key={index} className="text-xl">
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 px-24 gap-8">
        {github_data_json && data.github.showGithubProjects &&
          github_data_json.slice(10, 14).map((item: any, index: number) => {
            return (
              <div key={index} className="bg-green-100 p-4 rounded-md">
                <h1 className="font-bold">{item.name}</h1>
                <p className="leading-5">
                  {item.stargazers_count} stars {item.forks_count} forks
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
