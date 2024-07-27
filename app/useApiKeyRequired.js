import { useEffect } from "react";

export function useAPiKey() {
  useEffect(() => {
    const apiKey = localStorage.getItem("omdbKey");

    if (!apiKey) {
      const apiKey = prompt("Entrez votre clé API");
      localStorage.setItem("omdbKey", apiKey);
    }
  });
}
