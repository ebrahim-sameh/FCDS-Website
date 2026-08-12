import { useCallback, useEffect, useState } from 'react';

const readData = (dataGetter) => {
  try {
    return { status: 'ready', data: dataGetter() };
  } catch {
    return { status: 'error', data: null };
  }
};

/**
 * Loads list data for pages that need loading / error / retry UI.
 * First paint uses data immediately so the page does not jump (CLS).
 * Retry still shows a short loading state.
 */
const useSimulatedLoad = (dataGetter) => {
  const [state, setState] = useState(() => readData(dataGetter));
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setState({ status: 'loading', data: null });
    setAttempt((n) => n + 1);
  }, []);

  useEffect(() => {
    if (attempt === 0) return undefined;

    const timer = setTimeout(() => {
      setState(readData(dataGetter));
    }, 300);

    return () => clearTimeout(timer);
  }, [attempt, dataGetter]);

  return { status: state.status, data: state.data, retry };
};

export default useSimulatedLoad;
