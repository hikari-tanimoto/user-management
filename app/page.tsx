import { UserForm } from "@/app/components/UserForm";
import { UserList } from "@/app/components/UserList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>User Management</h1>
      <UserForm />
      <Suspense fallback={<div>ユーザーデータ読み込み中</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}
