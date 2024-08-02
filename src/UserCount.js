import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Typography } from '@mui/material';

const UserCount = () => {
    const [count, setCount] = useState(0);

    const countUsers = () => {
        Axios.get('http://localhost:3001/api/users/count')
            .then(response => {
                setCount(response.data.count);
            })
            .catch(error => {
                console.error("There was an error counting the users!", error);
            });
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={countUsers}
                sx={{
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    },
                }}
            >
                Count Users
            </Button>
            <Typography variant="h6" sx={{ color: '#000000', marginTop: '10px' }}>
                Total Users: {count}
            </Typography>
        </div>
    );
};

export default UserCount;
