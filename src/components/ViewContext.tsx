"use client";

import { createContext, useContext, useState } from "react";

export type View = "flow" | "list";

const ViewContext = createContext<{
  view: View;
  setView: (v: View) => void;
}>({ view: "flow", setView: () => {} });

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>("flow");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
