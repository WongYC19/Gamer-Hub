import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface ListGenreResponse {
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ListGenreResponse>("/genres", { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
