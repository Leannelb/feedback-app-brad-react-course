import React from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/UserSearch';

function Home() {
    return (
        <div>
            <UserSearch/>
            <UserResults />
        </div>
  )
}

export default Home;
