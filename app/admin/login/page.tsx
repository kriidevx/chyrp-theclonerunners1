"use client"; // Important: this makes the component run on the client

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Signup successful! Check Supabase profiles table.");
  };

  return (
    <div className="flex flex-col gap-2 max-w-sm mx-auto mt-10">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
}
