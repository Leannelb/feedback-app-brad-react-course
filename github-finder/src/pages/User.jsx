import React, { useEffect, useContext } from 'react';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';
import { useParams } from 'react-router-dom';

function User() {
    const { getUser, user, loading } = useContext(GithubContext);

    const params = useParams()

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        hirable
    } = user;

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
    }, []);

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <Link to='/' className='btn btn-ghost'>
                    Back to Search
                </Link>
            </div>
        </div>
        );
}

export default User;