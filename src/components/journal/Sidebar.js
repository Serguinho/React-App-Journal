import { useDispatch, useSelector } from "react-redux"
import { JournalEntries } from "./JournalEntries"
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

export const Sidebar = () => {

    const {name} = useSelector(state=>state.auth)
  //  console.log(name);
    const dispach=useDispatch();
    const handleLogout=()=>{
        dispach(startLogout());
    }
    const HandleAddNew=()=>{
        dispach(startNewNote());
    }
  return (
    <aside className="journal__sidebar">
        <div className="journal__sidebar-navbar">
            <h3 className="mt-5"> 
                <i className="far fa-moon"></i>
                <span>  {name}</span>
            </h3>
            <button 
                    className="btn"
                    onClick={handleLogout}
            >
                Logout
            </button>
        </div> 
        <div 
            className="journal__new-entry"
            onClick={HandleAddNew}
        >
            <i className="far fa-calendar-plus fa-5x"></i>
            <p className="mt-5">New entry</p>
        </div> 
        <JournalEntries/>
    </aside>
  )
}