import useSWR from "swr";

export const useMovieQuery = (search) => {
  return useSWR(`movie-finder-${search}`, async () => {
    if (search.length < 3) {
      throw new Error("Please enter at least 3 characters");
    }
    const apiKey = await localStorage.getItem("omdbKey");
    if (!apiKey) {
      throw new Error("Non authorisé");
    }
    const url = new URL(`http://www.omdbapi.com`);
    url.searchParams.append("s", search);
    url.searchParams.append("apiKey", apiKey);

    const data = await fetch(url.toString()).then((res) => res.json());

    console.log(data);
    return data;
  });
};
