import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T, 
  Dispatch<SetStateAction<T>>
]

export default function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storegeValue = localStorage.getItem(key);
    
    if(storegeValue){
      return JSON.parse(storegeValue);
    }else{
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
