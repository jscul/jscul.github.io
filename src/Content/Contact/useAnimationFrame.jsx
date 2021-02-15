import {useRef, useEffect} from 'react';

export default (callback, run) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const runningTotal = useRef(0);

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      runningTotal.current += time - previousTimeRef.current;
      callback(runningTotal.current);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (run) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    } else {
      runningTotal.current = 0;
      cancelAnimationFrame(requestRef.current);
    }
  }, [run]);
};
