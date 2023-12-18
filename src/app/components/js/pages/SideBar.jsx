
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/SideBar.css';
import MobileSideBar from './MobileSideBar';

export default function SideBar() {

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
                                    <span className="material-symbols-outlined logoSideBar" >account_circle</span>


                                    <br />
                                    <div id='profile'>

                                        <Link className='' onClick={handleClickOpen('paper')}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>

                                        <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
                                    </div>
                                    <h6 id='name'>Aman Kumar</h6>
                                    <h6 id='post'>Developer</h6>
                                    <h6 id='post'>{sessionStorage.getItem('Role')}</h6>
                                </li>
                            </ul>

                            <NavLink to={'/home'} className='link'><li className="list-group-item sidebar "> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Home</li></NavLink>
                        </div>
                        : (
                            <></>
                        )

                }

                {/* <div className="container">

                <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action">
                        Home
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">About</button>
                    <button type="button" class="list-group-item list-group-item-action">Profile</button>
                    <button type="button" class="list-group-item list-group-item-action">Notification</button>
                    <button type="button" class="list-group-item list-group-item-action">Files</button>
                </div>
            </div> */}
            </>)}
        </>
    )
}
