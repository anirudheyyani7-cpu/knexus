"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("superuser@knexus.ai");
  const [password, setPassword] = useState("KPMG@1234");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const redirect = searchParams.get("redirect") || "/";
      window.location.href = redirect;
    } else {
      const data = await res.json();
      setError(data?.error || "Login failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>

      {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

      <label className="block mb-2 text-sm font-medium">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2 text-sm font-medium">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <button className="w-full py-2 px-4 bg-brand-blue text-white rounded">Sign in</button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
