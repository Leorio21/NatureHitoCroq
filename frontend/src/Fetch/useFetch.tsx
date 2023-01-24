import { useEffect, useState } from "react";

export const useFetch = <T,>(
  file: string
): {
  isLoading: boolean;
  response?: T;
  error: string;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<T>();

  const fetchFunction = async (): Promise<void> => {
    setIsLoading(true);
    setError("");
    try {
      const result = await (await fetch(file)).json();
      setResponse(result);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    void fetchFunction();
  }, []);

  return { isLoading, response, error };
};
