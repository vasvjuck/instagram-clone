import '../style/homePage.scss';
import Header from './header';
import Cards from './Cards';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getUserPost } from '../actions/userActions'
import { useEffect } from 'react';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { RootState } from '../reducers';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    // let reloadHelper = true
    // const removeReload = () => {
    //     sessionStorage.removeItem('reload')
    // }
    // window.onload = removeReload
    // if (sessionStorage.getItem('reload') === 'reload') {
    //     reloadHelper = false
    // }
    // const reload = () => {
    //     window.location.reload()
    // }
    // if (reloadHelper) {
    //     sessionStorage.setItem('reload', 'reload')
    //     setInterval(reload, 500)
    // }

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const timer = () => {
        navigate('/')
    }

    const errorToastify = sessionStorage.getItem('error')
    if (errorToastify === '401' || errorToastify === '422') {
        toast("ERROR: Enter the correct data", {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER
        })
        sessionStorage.removeItem('error')
        setInterval(timer, 3000)
    }

    const userData = useSelector((state: RootState) => state.user.userData)
    const userInfo = Object.values(userData)
    const username = userInfo[0]
    useEffect(() => {
        //dispatch(getUserPost(username)),
            dispatch(getAllPost())
    }, [])
    return (
        <div className="Homepage">
            <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
            <Header />
            <main>
                <div className="container">
                    <Cards />
                    <div className="sidebar__container">
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;

