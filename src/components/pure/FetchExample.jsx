import { height } from '@mui/system';
import React, {useState, useEffect} from 'react';
import { getAllUsers, getAllPagedUsers, getUsersDetails, login} from '../../Services/FetchServices';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPages, setUsersPerPages] = useState(6);

    useEffect( () => {
        obtainsUsers();
    }, []);

    const obtainsUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data);
                setPages(response.total_pages)
                setUsersPerPages(response.per_page)
                setTotalUsers(response.total)
            }).catch((error) => {
                alert(`Error while receciving the users: ${error}` );
            }).finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data);
                setPages(response.total_pages)
                setUsersPerPages(response.per_page)
                setTotalUsers(response.total)
            }).catch((error) => {
                alert(`Error while receciving the users: ${error}` );
            }).finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    const obtainUsersDetails = (id) => {
        getUsersDetails(id)
            .then((response) => {
                console.log('user details', response.data);
                setSelectedUser(response.data)
            }).catch((error) => {
                alert(`Error while receciving the user details: ${error}` );
            }).finally(() => {
                console.log('Ended obtaining user details:');
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in','cityslicka')
        .then((response) => {
            console.log('TOKEN', response.token);
            sessionStorage.setItem('token',response.token)
        }).catch((error) => {
            alert(`Error while login user: ${error}`)
        }).finally(() => {
            console.log('Enden login user');
        })
    }

    return (
        <div>
            <button onClick={authUser}>
                auth user
            </button>
            <h2>Users:</h2>
            {
                users.map((user, index) => 
                    (<p key={index}
                        onClick={ () => obtainUsersDetails(user.id)}>
                        {user.first_name} {user.last_name}
                    </p>)
                )
            }
            <p>Showing {usersPerPages} users of {totalUsers} in total. </p>
            <button onClick={ () => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={ () => obtainPagedUsers(2) }>
                2
            </button>
            <div>
                <h3>
                    User Details
                </h3>
                { selectedUser && (
                    <div>
                        <p> Name: {selectedUser.first_name} </p>
                        <p> Last Name: {selectedUser.last_name} </p>
                        <p> Email: {selectedUser.email } </p>
                        <img src={selectedUser.avatar} style={{ height: '50px', width: '50px' }}></img>
                    </div>
                )}
            </div>

        </div>
    );
}

export default FetchExample;
