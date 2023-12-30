"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabase";

export default function Page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function init() {
      const { data: user } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }

      const userProfile = await supabase
        .from("profiles")
        .select()
        .eq("email", authData.email)
        .single();

      if (userProfile.data) {
        setUser(userProfile.data);
      } else {
        setUser({ email: authData.email });
      }
    }

    init(); // Call the init function
  }, []); // Add an empty dependency array to run the effect only once on mount

  return (
    <>
      <div>
        {user ? (
          <div>
            <h1>Welcome, {user.email}!</h1>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
