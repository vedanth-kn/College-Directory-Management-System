"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import StudentProfile from './student-profile'; // Ensure this path is correct

const StudentDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/'); // Redirect to login page
  };

  const handleSearch = () => {
    router.push('/search-student'); // Ensure this path is correct
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <StudentProfile />
      <div onClick={handleSearch} className="cursor-pointer text-blue-500 underline">
        Search Student
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default StudentDashboard;