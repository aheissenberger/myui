'use client';
import { createContext, useContext } from 'react';

const MyContext = createContext(null);
function useMyContext() {
  const ctx = useContext(MyContext);
  if (!ctx) {
    throw new Error("[@my/core] MyProvider was not found in tree");
  }
  return ctx;
}


export { MyContext, useMyContext };
//# sourceMappingURL=Mantine.context.mjs.map
