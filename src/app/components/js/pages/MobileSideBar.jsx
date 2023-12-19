
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/SideBar.css';

export default function MobileSideBar() {

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
            {
                sessionStorage.getItem('isLogin') ?
                    <div className='sidenav '>

                        <div className="offcanvas mar-gin side-body" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                            <div className="offcanvas-body">
                                {/* <div className="container">

                                    <div className="list-group">
                                        <button type="button" className="list-group-item list-group-item-action">
                                            Home
                                        </button>
                                        <button type="button" className="list-group-item list-group-item-action">About</button>
                                        <button type="button" className="list-group-item list-group-item-action">Profile</button>
                                        <button type="button" className="list-group-item list-group-item-action">Notification</button>
                                        <button type="button" className="list-group-item list-group-item-action">Files</button>
                                    </div>
                                </div> */}
                                <ul className="list-group">
                                    <li className="list-group-item sidebarProfile">

                                        <br />
                                        <span className="material-symbols-outlined logoSideBar" >account_circle</span>

                                        {/* {
                                            (userData.imagePath != null || userData.imagePath != undefined) ? (
                                                <div >
                                                    <img className='sidebarImg' src={userData.imagePath} alt='' />

                                                </div>
                                            ) : (<>

                                                <span className="material-symbols-outlined logoSideBar" >account_circle</span>


                                            </>)
                                        } */}

                                        <br />
                                        <div id='profile'>

                                            <Link className='' onClick={handleClickOpen('paper')}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>

                                            <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
                                        </div>
                                        <h6 id='name'>{JSON.parse(sessionStorage.getItem('loginUser')).firstName} {JSON.parse(sessionStorage.getItem('loginUser')).lastName}</h6>
                                        <h6 id='post'>{JSON.parse(sessionStorage.getItem('loginUser')).profile}</h6>
                                        <h6 id='post'>{sessionStorage.getItem('Role')}</h6>
                                    </li>
                                </ul>

                                <NavLink to={'/home'} className='link'><li className="list-group-item sidebar "  data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Home</li></NavLink>

                                <NavLink to={'/profile'} className='link'><li className="list-group-item sidebar "  data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>settings_account_box</span>Profile</li></NavLink>

                                <NavLink to={'/dashboard'} className='link'><li className="list-group-item sidebar "  data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="pills-home" aria-selected="true"> <span className='material-symbols-outlined sidebarLogo'>home_app_logo</span>Dashboard</li></NavLink>
                        

                            </div>

                        </div>
                    </div >
                    : (
                        <></>
                    )

            }


        </>
    )
}
