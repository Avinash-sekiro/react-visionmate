import React from 'react'
// import Navs from '../component/Navs'
import Herosec from '../component/Herosec'
import Feature from '../component/Feature'
import Info from '../component/Info'
import How from '../component/How'
import About from '../component/About'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import "./style.css"

export default function Home() {
  return (
    <div>
     {/* <Navs/> */}
     <Herosec/>
     <Feature/>
     <Info/>
     <How/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  )
}
