```jsx
"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Аккаунт успешно создан!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Вы успешно вошли!");
      }
    } catch (error) {
      setMessage("Ошибка: " + error.message);
    }
  }

  return (
    <main style={{ padding: "40px", maxWidth: "450px", margin: "0 auto" }}>
      <h1>{isRegister ? "Регистрация" : "Вход"}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0",
          }}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            margin: "10px 0",
          }}
        />

        <button type="submit">
          {isRegister ? "Создать аккаунт" : "Войти"}
        </button>
      </form>

      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setMessage("");
        }}
        style={{ marginTop: "15px" }}
      >
        {isRegister
          ? "У меня уже есть аккаунт"
          : "Создать новый аккаунт"}
      </button>

      {message && <p>{message}</p>}
    </main>
  );
}
```
