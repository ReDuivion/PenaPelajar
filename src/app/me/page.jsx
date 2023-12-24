"use client";

// pages/me.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Perhatikan penggunaan next/navigation
import { supabase } from "../config/supabase.js";

const MePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) {
          console.error("Error fetching user:", error.message);
          router.push("/login");
        } else {
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MePage;
