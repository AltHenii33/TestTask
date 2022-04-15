import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Filter from '../Filter/Filter';
import List from '../UsersList/List'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../Store/Main-reduser'
import './Layout.css';

const Layout = () => {

    const dispatch = useDispatch();
    const Users = useSelector((state) => state.main.Users);
    let a = false;

    useEffect(() => {
        if (a === false) {
            a = true
            dispatch(getUsers(50));
        }
    }, []);

    return (
        <>
            <Box className='Layout'>
                <div className='TextFilter'>
                    Filter
                    <Filter />
                </div>
                <div className='UserList' >
                    <div className='TextList'>
                        List of users
                    </div>
                    <List />
                </div>
            </Box>
        </>
    );
}

export default Layout