import React, { useEffect, useState } from 'react';
import '../css/NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import { useLogin } from '../../context/LoginContext';



function MobileNavBar() {
  const { logout } = useLogin();
  const { isLogin, setIsLogin } = useLogin();
  //console.log("Log : "+isLogin)

  // const [isLogin,setIsLogin] = useState();

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



  useEffect((() => {
    return () => {
      //setIsLogin(sessionStorage.getItem('isLogin'));
    }
  }), [])

  return (
    <>

      <nav
        style={{ background: '#F0FFFF' }}
        className='Container  sticky-top navCSS'>
        {sessionStorage.getItem('isLogin') ? (
          <div>
            {
              sessionStorage.getItem('Role') == 'Admin' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>
                  </a>
                </>
              ) : (<></>)
            }


            {
              sessionStorage.getItem('Role') == 'User' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
            {
              sessionStorage.getItem('Role') == 'SupperAdmin' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
            {
              sessionStorage.getItem('Role') == 'Vendor' ? (
                <>
                  <a style={{ color: '#116D6E' }} className='float-start menuNav' data-bs-toggle="offcanvas" href="#offcanvasExampleVendor" role="button" aria-controls="offcanvasExample">
                    <span style={{ background: '' }} className="material-symbols-outlined">
                      menu
                    </span>

                  </a>
                </>
              ) : (<></>)
            }
          </div>


        ) : (<></>)
        }
        <Link to={'/'}
        >
          <div className='float-start'>

            {/* <img className='eqippedLogo' src='https://eqipped.com/E (4).png' /> */}
            <img className='eqippedLogo' src='vite.svg' />

          </div>

        </Link>

        {/* <div id='home-search-div' className='searchBoxCSS sticky-top'>
        <FormControl variant="filled" fullWidth sx={{ mt: 3 }} className='home-search'>
           <OutlinedInput className='m-0 searchBoxImputNavbar'

            required name="recipient"
            size='small'
            value={searchData} onChange={handleSearchInputChange}
            id="outlined-adornment-amount"
            startAdornment={<Search />}
          
          />
        </FormControl>
      </div> */}

        {sessionStorage.getItem('isLogin') ? (
          <div className="float-end">
            <Link className='navAccountResponsive mt-1 mb-1 float-end' onClick={logout}>
              <span id='logoutIcon' className="material-symbols-outlined">logout</span>&nbsp;<p className='navAccountText'>Logout</p>
            </Link>
            <Link className='navCartResponsive mt-1 mb-1 float-end' to={'/cart'}>
              <span id='shoppingCart' className="material-symbols-outlined">shopping_cart</span>&nbsp;<p className='cartText'>Cart</p>
            </Link>
          </div>
        ) : (
          <div className='float-end'>
            <Link className='navAccountResponsive float-end mt-1 mb-1 float-end' to='/login'>
              <span id='logoutIcon' className="material-symbols-outlined">login</span>&nbsp;<p className='navAccountText'>Login</p>
            </Link>
          </div>
        )

        }

        {/* <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>

                <FormControl variant="filled" id="spring-modal-title" fullWidth sx={{ mt: 3 }} className=''>
                  <OutlinedInput className='m-0 searchBoxImputNavbar'

                    required name="recipient"
                    size='small'
                    value={searchData} onChange={handleSearchInputChange}
                    id="outlined-adornment-amount"
                    startAdornment={<Search />}

                  />
                </FormControl>

                {searchNeeded ? (<>
                  <Scrollbars style={{ height: 235 }}> 
                  <InfiniteScroll
                    dataLength={product.length}
                    next={fetchProductData}
                    hasMore={true}
                    loader={<div id='home-infinity-scroll-loading' className='text-center loading1'>

                      <img id='home-infinity-scroll-loading-img' style={{ width: 50, height: 50 }} src='spinner.gif' />

                    </div>}

                  >
                  {product.map((item, index) => (
                    <>
                      <ListItem
                        key={index}

                        disablePadding
                      ><Link id='home-infinity-scroll-link' to={'/productDetails/' + item.productId} className="col text-decoration-none linkHover">

                        <ListItemButton>
                          <ListItemAvatar>
                            <Avatar

                              src={item.imagePath}
                            />
                          </ListItemAvatar>
                          <ListItemText id={item.productName} primary={item.productName} />
                        </ListItemButton>
                        </Link>
                      </ListItem>
                      


                    </>
                  ))
                  }
                  </InfiniteScroll>
                  </Scrollbars> 

                </>) : (<>




                </>)


                }

              </Box>
            </Fade>
          </Modal>
        </div> */}
        {/* <div>
          <Button onClick={handleClickOpen('paper')}>
            <FormControl variant="filled" fullWidth sx={{ mt: 0 }} id="spring-modal-title" className=''>
              <OutlinedInput className='m-0 searchBoxImputNavbar'


                size='small'
                id="outlined-adornment-amount"

                startAdornment={<Search />}


              />
            </FormControl>

          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">
              
              <FormControl variant="filled" id="spring-modal-title" fullWidth sx={{ mt: 3 }} className=''>
                <OutlinedInput className='m-0 searchBoxImputNavbar'

                  required name="recipient"
                  size='small'
                  value={searchData} onChange={handleSearchInputChange}
                  id="outlined-adornment-amount"
                  startAdornment={<Search />}
                  endAdornment={<Link
                    onClick={clearSearchData}
                  
                  ><Close /></Link>}

                />
              </FormControl>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >

                {searchNeeded ? (<>
                  
                  <InfiniteScroll


                    pullDownToRefreshThreshold={50}
                    dataLength={product.length}
                    next={() => onSearchHandle(localStorage.getItem('homeSearch'))}
                    hasMore={true}
                    loader={<div id='home-infinity-scroll-loading' className='text-center loading1'>

                      <img id='home-infinity-scroll-loading-img' style={{ width: 50, height: 50 }} src='https://eqipped.com/spinner.gif' />

                    </div>}

                  >
                    {product.map((item, index) => (
                      <>
                        <ListItem
                          key={index}

                          disablePadding
                        ><Link id='home-infinity-scroll-link' onClick={handleClose} to={'/productDetails/' + item.productId} className="col text-decoration-none linkHover">

                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar

                                  src={item.imagePath}
                                />
                              </ListItemAvatar>
                              <ListItemText id={item.productName} primary={item.productName + "(" + item.brandName + ")"} />
                            </ListItemButton>
                          </Link>
                        </ListItem>



                      </>
                    ))
                    }
                  </InfiniteScroll>
                  

                </>) : (<>




                </>)


                }

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              
              <button className='btn btn-danger' onClick={handleClose}> &nbsp;&nbsp;Close &nbsp;&nbsp;</button>
            </DialogActions>
          </Dialog>
        </div> */}

      </nav >


      {/* ************************************************************************************************************************ */}




      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: '0px 0px 20px #8d8a8a' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Navbar</Link>

          {isMobile ? (<>

          </>) : (<>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `${isActive ? "link-color" : "nav-link"}`} to={"/"}> Home</NavLink>
                </li>

              </ul>
            </div>
          </>)}

          {(

            sessionStorage.getItem('isLogin')
          ) ? (
            <>
              <button className="btn btn-outline-success" type="submit" onClick={logout}>logout</button>
            </>) : (
            <>
            </>)}

        </div>
      </nav> */}

    </>
  )
}

export default MobileNavBar;