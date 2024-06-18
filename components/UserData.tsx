"use client";

import { useSession } from "next-auth/react";

export const UserData = () => {
  const { data: session } = useSession();
  return <div>{JSON.stringify(session)}</div>;
};
