/**
 * useEffect를 활용한 Debounce는 범용적이지 않고 비동기로 작동하여,
 * 아래와 같은 javascript로 만들어진 debounce로 로직구현.
 */
const useDebounce = (func: any, wait: number) => {
  let timeout: NodeJS.Timeout | null;
  return (...args: any) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export default useDebounce;
