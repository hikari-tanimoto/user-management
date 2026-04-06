"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export type UserData = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async (): Promise<UserData[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

export const UserList = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery<UserData[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 10,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data)
    return <div>Error: {isError && "データを取得できませんでした"}</div>;
  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button
        onClick={() => queryClient.invalidateQueries({ queryKey: ["users"] })}
      >
        Refetch
      </button>
    </>
  );
};
