import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }) {
    return <div className='round-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className='h2 text-3xl my-4 font-bold card-title'>
                Latest Repositories
            </h2>
            {repos.map((repo) => {
                <RepoItem key={repo.id} repo={ repo }/>
            })}
        </div>   
    </div>;
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList;