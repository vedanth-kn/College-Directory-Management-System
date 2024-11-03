// src/app/pages/Student.tsx

import React from 'react';

const StudentProfile = () => {
  const profile = {
    photo: 'profile-pic-url', // Replace with actual photo URL or state
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    department: 'Computer Science',
    year: '3',
    courses: ['Course 1', 'Course 2', 'Course 3']
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full" />
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Department: {profile.department}</p>
      <p>Year: {profile.year}</p>
      <h3>Courses</h3>
      <ul>
        {profile.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfile;
