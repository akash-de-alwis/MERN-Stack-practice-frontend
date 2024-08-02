import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Input, Typography, Box } from '@mui/material';
import UsersTable from './UsersTable';

const UserSearch = () => {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);

    const searchUsers = () => {
        Axios.get(`http://localhost:3001/api/users/search?name=${name}`)
            .then(response => {
                setResults(response.data.response);
            })
            .catch(error => {
                console.error("There was an error searching the users!", error);
            });
    };

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Input
                type="text"
                placeholder="Search by name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginRight: '10px' }}
            />
            <Button
                variant="contained"
                onClick={searchUsers}
                sx={{
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    },
                }}
            >
                Search
            </Button>
            {results.length > 0 && (
                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h6" sx={{ color: '#000000' }}>
                        Search Results:
                    </Typography>
                    <UsersTable rows={results} selectedUser={() => {}} deleteUser={() => {}} />
                </Box>
            )}
        </Box>
    );
};

export default UserSearch;
