"use client";
import { useUserAuth } from "./_utils/auth-context";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleLogin() {
  try{
    await gitHubSignIn();
  }
  catch(error){
    console.error("Error during sign-in:", error);
  }
  }
  async function handleLogout() {
    try{
      await firebaseSignOut();
    }
    catch(error){
      console.error("Error during sign-out:", error);
    }
    }

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
