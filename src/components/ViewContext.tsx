"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type View = "flow" | "list";

const ViewContext = createContext<{
  view: View;
  setView: (v: View) => void;
}>({ view: "flow", setView: () => {} });

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<View>("flow");

  useEffect(() => {
    queueMicrotask(() => {
      try {
        if (sessionStorage.getItem("likha-view") === "list") setView("list");
      } catch {}
    });
  }, []);

  const change = (v: View) => {
    setView(v);
    try {
      sessionStorage.setItem("likha-view", v);
    } catch {}
  };

  return (
    <ViewContext.Provider value={{ view, setView: change }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  return useContext(ViewContext);
}
