import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

const DashBoard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(()=> { 
    const urlParams = new URLSearchParams(location.search) // search is a method from the constructor 
    const tabFormUrl = urlParams.get('tab');
    if(tabFormUrl){
      setTab(tabFormUrl);
    }},
    [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className=" md:w-56">
        {/* Sidebar */}
        <DashSidebar>
        </DashSidebar>
      </div>
      
         {/* profile */}
         {tab === 'profile' && <DashProfile></DashProfile>   }
        

    </div>
  )
}

export default DashBoard
