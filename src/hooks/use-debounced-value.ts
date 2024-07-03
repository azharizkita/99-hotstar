import { useState, useEffect } from "react";

/**
 * Provides debounced values so the re-render process will wait until certain duration
 *
 */
export default function useDebouncedValue<T>(value: T, delay: number = 450): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
