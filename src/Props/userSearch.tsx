import React, { useState } from "react";
import "./userSearch.css"

interface User {
    name: string;
    age: number;
}

export const UserSearch: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { name: "Edouard", age: 23 },
        { name: "Sophia", age: 25 },
        { name: "Lucas", age: 30 },
        { name: "Emma", age: 28 },
        { name: "Liam", age: 32 },
        { name: "Olivia", age: 29 },
        { name: "Noah", age: 24 },
        { name: "Ava", age: 26 },
        { name: "Isabella", age: 27 },
        { name: "William", age: 31 },
        
    ]);

    const [mode, setMode] = useState<'SEARCH' | 'REGISTER'>('SEARCH');

    
    const [search, setSearch] = useState("");
    const [foundName, setFoundName] = useState<string | null>(null);
    const [foundAge, setFoundAge] = useState<number | null>(null);

   
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");

    const handleSearch = () => {
        const user = users.find(u => u.name === search);
        if (user) {
            setFoundName(user.name);
            setFoundAge(user.age);
        } else {
            setFoundName(null);
            setFoundAge(null);
            alert("That person does not exist in our database.");
        }
        setSearch("");
    }

    const handleRegister = () => {
        if (name.trim() && typeof age === 'number') {
            const existingUser = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    
            if(existingUser) {
                alert("A user with this name already exists. Please register with a different name.");
                return;
            }
    
            setUsers(prevUsers => [...prevUsers, { name, age }]);
            setName("");
            setAge("");
            alert("Well registered")
        } else {
            alert("Please enter a valid name and age.");
        }
    }
    
    return (
        <div>
            <button onClick={() => setMode(mode === 'SEARCH' ? 'REGISTER' : 'SEARCH')}>
                Switch to {mode === 'SEARCH' ? 'Register' : 'Search'}
            </button>

            {mode === 'SEARCH' ? (
                <div>
                    <h2>Search a user</h2>
                    <input
                        type="text"
                        placeholder="Enter user's name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>

                    <ul>
                        {foundName && <li>Name: {foundName}</li>}
                        {foundAge !== null && <li>Age: {foundAge}</li>}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>Register a user</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                    <button onClick={handleRegister}>Register</button>
                </div>
            )}
        </div>
    );
}

export default UserSearch;
