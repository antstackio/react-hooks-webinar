import { useCallback } from "react";
export const useDebounce = (delay, callback) => {
  const debounce = function (d, fn) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, d);
    };
  };

  const debouncedCallback = useCallback(debounce(delay, callback), []);
  return debouncedCallback;
};
