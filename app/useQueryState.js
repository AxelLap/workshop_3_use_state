import { useEffect, useState } from "react";

export function useQueryState(key, initialValue) {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    const newUrl = new URL(window.location);
    const params = newUrl.searchParams;
    if (params.get(key)) {
      setQuery(params.get(key));
    } else {
      return;
    }
  }, [key, initialValue]);

  useEffect(() => {
    const newUrl = new URL(window.location);
    const params = newUrl.searchParams;
    if (!query) {
      params.delete(key);
    } else {
      params.set(key, query);
    }
    window.history.replaceState({}, "", newUrl);
  }, [key, query]);

  return [query, setQuery];
}
