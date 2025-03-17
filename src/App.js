import Home from "./screens/Home";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export default function App (){

  useEffect(()=>{
    AOS.init();
  },[])
  
  return(
<>
<Home/>
</>
  );
}