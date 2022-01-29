import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  
  console.log('loading UserREsults', loading);

  if (!loading) {
    return <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2'>
      { console.log('users ', users)}
          {users.map((user) => (
            <UserItem key={user.id} user={ user }/>
          ))}
        </div>;
  } else {
    return <Spinner/>
  }

}

export default UserResults;