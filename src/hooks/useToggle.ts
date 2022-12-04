import { useState, useCallback } from 'react';

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const hangleToggle = useCallback(() => {
    setValue((prevState) => !prevState);
  }, []);

  return [value, hangleToggle];
}

export { useToggle };
