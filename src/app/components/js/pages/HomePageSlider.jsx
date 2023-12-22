
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../../css/HomePageSlider.css'
import { Link } from 'react-router-dom';

const HomePageSlider = () => {

  









  return (
    <>
      {/* <div style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
        <img style={{ width: 1200, height: 900 }} src="image 1.png" />
      </div> */}
      {/* <div className='d1'>
        <img className='img1' src="IMG.png" />
        <div className='d2'>
          <div className='d3'></div>
          <div className='d4'>
            <div className='d5'>
              <img className='img2' src="Outlook.svg" />
            </div>
            <div className='d6'>
              
              <img className='img2' src="Outlook.svg" />
              
            </div>
            <div className='d8'>
              
              <img className='img2' src="Outlook.svg" />
              
            </div>
          </div>
          <div className='d10'>
            <div className='d11'>shared</div>
          </div>
        </div>
        <div className='d12'>
          <div className='d13'>V 1.0.0</div>
          <div className='d14'>
            <div className="d15"></div>
          </div>
        </div>
        <div className="d16">
          <div className='d17'>Microsoft 365 UI Kit</div>
        </div>
      </div> */}


      <div

      >

        {/* <div className="spinner-container">
          <div className="spinner"></div>
        </div> */}


        <div className=''>
          <div className="text-content">
            <div className="name">XML Formater</div>
            <div className="job">
              <div className="job mb-5">
                <div className="mb-5">
                  <img  style={{ width: '150px' }} src='excel.png' />

                  <img  style={{ width: '150px' }} src='xml.png' />

                  <img style={{ width: '150px' }} src='word.png' />

                  <div className='mb-5'> <span style={{ color: '#3a665c' }}>Convert  </span>
                    <TypeAnimation
                      sequence={[

                        'your Xsd to Xml',
                        3000,
                        'excel needs to fill the xml fields value',
                        3000,

                      ]}
                      wrapper="span"
                      
                      speed={0}
                      style={{ color: '#3a665c' }}
                      repeat={Infinity}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>





    </>
  )

}
export default HomePageSlider;
