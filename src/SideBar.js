import { AiOutlineHome, AiOutlineCalendar, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

function SideBar() {

  
    return  (
        <div className=" 
        top-0 left-0 h-screen w-auto 
        flex flex-col 
        items-left
        p-3">
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
  