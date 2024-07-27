import { useState, useEffect } from "react";

export function useDebounceValue(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debounce;
}
