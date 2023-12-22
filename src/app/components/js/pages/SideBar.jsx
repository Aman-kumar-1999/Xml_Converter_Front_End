
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/SideBar.css';
import MobileSideBar from './MobileSideBar';
import userContext from '../../../context/userContext';
import { Avatar, AvatarGroup } from '@mui/material';

export default function SideBar() {


    const userContxtData = useContext(userContext);

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    // var userData = JSON.parse(localStorage.getItem('loginUser'))
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 600; // Change 600 to your desired breakpoint
            setIsMobile(isMobileDevice);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen size
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            {isMobile ? (<>
                <MobileSideBar />
            </>) : (<>


                {
                    sessionStorage.getItem('isLogin') ?
                        <div className='sidenav '>
                            <ul className="list-group">
                                <li className="list-group-item sidebarProfile">

                                    <br />
                                    <Avatar className='sidebarImg' 
                                    style={{width:100, height:100, marginLeft:"30px"}}
                                    />

                                    {/* <AvatarGroup style={{width:100, height:100}}/> */}


                                    {/* <span className="material-symbols-outlined logoSideBar" >account_circle</span> */}


                                    <br />
                                    <div id='profile'>

                                        {/* <Link className='' onClick={handleClickOpen('paper')}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link> */}

                                        <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
                                    </div>
                                    {/* <h6 id='name'>{userContxtData.user.data.firstName} {userContxtData.user.data.lastName}</h6> */}
                                    <h6 id='name'>{JSON.parse(sessionStorage.getItem('loginUser')).firstName} {JSON.parse(sessionStorage.getItem('loginUser')).lastName}</h6>
                                    <h6 id='post'>{JSON.parse(sessionStorage.getItem('loginUser')).profile}</h6>
                                    <h6 id='post'>{sessionStorage.getItem('Role')}</h6>
                                </li>
                            </ul>

                            <Link to={'/'} className='link'><li className="list-group-item sidebar " data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Home</li></Link>

                            <Link to={'/profile'} className='link'><li className="list-group-item sidebar " data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>settings_account_box</span>Profile</li></Link>

                            <Link to={'/dashboard'} className='link'><li className="list-group-item sidebar " data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Dashboard</li></Link>

                        </div>
                        : (
                            <></>
                        )

                }

                

            </>)}
        </>
    )
}
