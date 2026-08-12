import { useCallback, useEffect, useState } from 'react';

const useSimulatedLoad = (dataGetter) => {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setStatus('loading');
    setData(null);
    setAttempt((n) => n + 1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const result = dataGetter();
        setData(result);
        setStatus('ready');
      } catch {
        setStatus('error');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [attempt, dataGetter]);

  return { status, data, retry };
};

export default useSimulatedLoad;
