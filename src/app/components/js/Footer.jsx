import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <MDBFooter  style={{boxShadow:'0px 0px 50px #8d8a8a'}} bgColor='#116D6E' className='text-center text-lg-start  footer'>
                {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>
                        Get connected with us on social networks:
                            <img style={{width:"40%"}} src='https://eqipped.com/eqippedLogo.png' />
                            
                            </span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com/eqipped' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='facebook-f' />
                        </a>
                        <a href='https://twitter.com/eqipped_' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='twitter' />
                        </a>
                        <a href='https://eqipped.com' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='google' />
                        </a>
                        <a href='https://www.instagram.com/eqipped/' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='instagram' />
                        </a>
                        <a href='https://www.linkedin.com/company/gearloose-labs/' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='linkedin' />
                        </a>
                        <a href='' className='me-4 text-reset'  target="_blank">
                            <MDBIcon color='' fab icon='github' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                <Link to={'/'} ><img style={{width:"80%"}} src='https://eqipped.com/E (8).png' /></Link>
                                Eqipped (Gearloose Labs Pvt)
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />

                                    
                                </h6>
                                <p className=''>
                                   is a one-stop E-commerce platform for chemicals and synthetics with an additinal product
                                   range of glassware, equipment, and tools for your lab.
                                </p><Link style={{color:"#aeaaaf"}} to={'/'} >view more</Link>
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Terms & Conditions
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Privacy & Policy
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Shipping & return
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Team Members
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Careers
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Product</h6>
                                <p>
                                    <Link to={'equipments'} className='text-reset'>
                                        Equipments
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'instruments'} className='text-reset'>
                                    Instruments
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'plasticware'} className='text-reset'>
                                        Plastic Ware
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'glassware'} className='text-reset'>
                                        Glass Ware
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'chemicals'} className='text-reset'>
                                    Chemicals
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'chart'} className='text-reset'>
                                        Charts & Models
                                    </Link>
                                </p>
                                
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='' icon='location-dot' className='me-3' />
                                   B-122, HIG, Phase 2B, Shastripuram Yojna, Agra, 282007
                                </p>
                                <p>
                                    <MDBIcon color='' icon='envelope' className='me-3' />
                                    gearloose.lab@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='' icon='phone' className='me-3' />+91 97909 10478
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section> */}

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    ©  &nbsp; &nbsp;
                    <Link to={"/"} className='text-reset fw-bold' >
                        Code a2z
                    </Link>
                </div>
            </MDBFooter>
    </>
  )
}

export default Footer