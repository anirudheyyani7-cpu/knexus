"use client";

import { createContext, useContext } from "react";
import type { Role } from "@/lib/auth";

const SessionContext = createContext<Role | null>(null);

export function SessionProvider({
  role,
  children,
}: {
  role: Role | null;
  children: React.ReactNode;
}) {
  return <SessionContext.Provider value={role}>{children}</SessionContext.Provider>;
}

export function useIsRestricted() {
  return useContext(SessionContext) === "restricted";
}
