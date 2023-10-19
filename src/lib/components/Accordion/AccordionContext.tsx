import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

const AccordionContext = createContext({
  isShow: false,
  show: () => {},
  hide: () => {},
});

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider = ({ children }: PropsWithChildren) => {
  const [isShow, setIsShow] = useState(false);

  const value = useMemo(
    () => ({
      isShow,
      show: () => setIsShow(true),
      hide: () => setIsShow(false),
    }),
    [isShow]
  );

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};
