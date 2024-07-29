"use client";

import { useQueryState } from "./useQueryState";
import { useDebounceValue } from "./useDebounceValue";
import { useAPiKey } from "./useApiKeyRequired";
import { useMovieQuery } from "./useMovieQuery";

export default function Home() {
  const [queryState, setQueryState] = useQueryState("search", "");
  const debouncedQuery = useDebounceValue(queryState, 500);
  useAPiKey();
  const { data, error, isLoading } = useMovieQuery(debouncedQuery);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="min-h-full min-w-full  flex flex-col items-center">
        <h1 className="scroll-m-20 font-caption text-4xl font-extrabold tracking-tight lg:text-5xl">
          MovieFinder
        </h1>
        <fieldset className="flex flex-col justify-center m-[50px] px-8 py-4 text-[1rem] border border-neutral rounded-[10px] w-1/3">
          <legend className="px-1">Search</legend>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              value={queryState}
              type="text"
              className="grow w-full"
              placeholder="Search"
              onChange={(e) => {
                setQueryState(e.target.value);
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
          {error && (
            <div role="alert" className="alert alert-error mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{error.message}</p>
            </div>
          )}
        </fieldset>
        <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {isLoading &&
            Array.from({ length: 5 }).map((_, i) => {
              <div className="card-body flex justify-center items-center skeleton"></div>;
            })}

          {data?.Search &&
            data.Search.map((movie) => (
              <div
                key={movie.imdbID}
                className="card bg-base-100 w-96 shadow-xl"
              >
                <figure>
                  <img src={movie.Poster} alt="Shoes" />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-center">{movie.Title}</h2>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
