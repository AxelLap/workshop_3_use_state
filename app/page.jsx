"use client";

import { useQueryState } from "./useQueryState";

export default function Home() {
  const [query, setQuery] = useQueryState("search", "");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-full min-w-full  flex flex-col items-center">
        <h1 className="scroll-m-20 font-caption text-4xl font-extrabold tracking-tight lg:text-5xl">
          MovieFinder
        </h1>
        <fieldset className="flex justify-center m-[50px] px-8 py-4 text-[1rem] border border-neutral rounded-[10px] w-full">
          <legend className="px-1">Search</legend>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              value={query}
              type="text"
              className="grow w-full"
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </fieldset>
        <p>{query}</p>
      </div>
    </main>
  );
}
