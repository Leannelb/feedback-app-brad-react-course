import { Navigate, useNavigate, Routes, Route  } from 'react-router-dom';

function Page1() {
    // const status = 200;

    // if (status === 404) {
    //     return <Navigate to='/notfound' />    
    // }

    const navigate = useNavigate();

    const handleOnClick = () => {
        console.log('Hello');
        navigate('/about')
    }

    return (
        <div>
            <h1>Post Hello</h1>
            <button onClick={handleOnClick}>Click</button>
            <Routes>
                <Route path='/show' element={<h1>This is my nested route </h1>}/>
            </Routes>
        </div>
    )
}

export default Page1