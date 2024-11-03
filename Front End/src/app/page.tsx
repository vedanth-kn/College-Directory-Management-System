"use client";
import { useEffect } from "react";
import LoginPage from "./pages/login";
import StudentDashboard from "./pages/StudentDashboard";

export default function Home() {
 
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem('token'); // Replace with your actual authentication logic

    if (isLoggedIn) {
        // You can access the user data here if needed
    }
}, []);

  
  return (
    <>
      {true ? <StudentDashboard /> : <LoginPage />}
    </>
  );
}
