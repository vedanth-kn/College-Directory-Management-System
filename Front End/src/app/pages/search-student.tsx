"use client";
import React, { useState } from 'react';

const SearchStudent = () => {
  console.log("SearchStudent component rendered"); // Log statement for debugging

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com' },
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    // Filter logic
    const filtered = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com' },
      { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com' },
    ].filter(student => student.name.toLowerCase().includes(value));
    
    setFilteredStudents(filtered);
  };

  return (
    <div>
      <h1>Search Students</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredStudents.length ? (
          filteredStudents.map(student => (
            <li key={student.id}>
              {student.name} - {student.email}
            </li>
          ))
        ) : (
          <li>No students found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchStudent;
