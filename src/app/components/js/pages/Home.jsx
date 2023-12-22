
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../helper/helper';
import { getToken } from '../../../auth';
import HomePageSlider from './HomePageSlider.jsx';

export default function Home() {


  return (
    <>
      <HomePageSlider/>
    </>
  )
}
