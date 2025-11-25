"use client";
import { useUserAuth } from "../../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, gitHubSignIn} = useUserAuth();
  const router = useRouter();

  async function handleLogin() {
  try{
    await gitHubSignIn();
  }
  catch(error){
    console.error("Error during sign-in:", error);
  }
  }

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);
  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
      <></>
      )}
    </div>
  );
}
