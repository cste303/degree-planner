import React from "react";
import { supabase } from "@/config/supabase_config";

const GoogleSignInButton = () => {
  const handleGoogleSignIn = async () => {
    // Initiate Google OAuth sign-in using Supabase
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        // Handle error, e.g., display an error message
        console.error("Google sign-in error:", error);
        // Redirect to the login page with an error parameter
      } else {
        // User signed in successfully
        console.log("Google sign-in success. User:", data);
        // Redirect to the home page after successful sign-in
      }
    } catch (error) {
      console.error("Error while initiating Google sign-in:", error);
      // Redirect to the login page with an error parameter
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full items-center gap-2 text-foreground">
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleSignInButton;
