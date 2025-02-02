'use client'
import {useEffect} from 'react'

import React from 'react'



export default function page() {
    useEffect(()=>{
        const link = document.querySelector('#kjvlink')
        link.click()
    },[])
  return (
    <div><a id="kjvlink" href="/kjv.pdf" target="_blank"></a></div>
  )
}
