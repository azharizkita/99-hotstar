export const getLocalStorageData = (key: string) => {
  if (typeof window === "undefined") return null;

  const result = window.localStorage.getItem(key);
  if (!result) return null;

  return JSON.parse(result);
};

export const setLocalStorageData = (key: string, value: any) => {
  if (typeof window === "undefined") return null;

  if (typeof value === "object") {
    const _value = JSON.stringify(value);
    window.localStorage.setItem(key, _value);
    return;
  }

  window.localStorage.setItem(key, value);
};

export const removeLocalStorageData = (key: string) => {
  if (typeof window === "undefined") return null;

  window.localStorage.removeItem(key);
};
