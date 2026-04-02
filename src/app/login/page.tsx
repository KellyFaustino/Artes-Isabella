"use client";

import LoginForm from "@/components/login/login";
import { useState } from "react";
import Home from "../home/page";

type User = {
  email: string;
};

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  const hasUser = Boolean(user);

  return (
    <div className="h-screen">
      {!hasUser && <LoginForm onLogin={setUser} />}
      {hasUser && <Home />}
    </div>
  );
};

export default Login;
