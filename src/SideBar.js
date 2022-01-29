import { AiOutlineHome, AiOutlineCalendar, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

function SideBar() {

  
    return  (
        <div className=" 
        sidebar">
            <SideBarIcon icon={<AiOutlineHome size="28" className="mr-5"/>} name="Home"/>
            <SideBarIcon icon={<AiOutlineCalendar size="28" className="mr-5"/>} name="Events"/>
            <SideBarIcon icon={<AiOutlineMessage size="28" className="mr-5"/>} name="Messages"/>
            <SideBarIcon icon={<AiOutlineHeart size="28" className="mr-5"/>} name="Wish List"/>
          
        </div>

    );
  }

  const SideBarIcon = ({icon, name}) => (
    <div className="sidebar-icon flex ">
        {icon} <p> {name}</p>
      </div>
  )
      
  
  export default SideBar;
  