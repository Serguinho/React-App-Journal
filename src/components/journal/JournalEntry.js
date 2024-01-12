import moment from "moment/moment"
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";


export const JournalEntry = ( {id, date,title,body,url}) => {
  
  const dispatch=useDispatch();
  const notesdate= moment(date); 

  const handleEntryClick =()=>{
    dispatch(
      activeNote(id,{
          id,
          date,
          title,
          body,
          url
        }
      )
      );
  }


  return (
    <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
    onClick={handleEntryClick}
    >
      
        {
          url &&
          <div
         className="journal__entry-picture"
         style={{
            backgroundSize:'cover',
            backgroundImage:`url(${url})`
            
         }}
        >

        </div>
        }
        <div className="journal__entry-body">
            <p className="journal__entry-tittle">
                {title}
            </p>
            <p className="journal__entry-content">
              {body}   
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>{notesdate.format('dddd')}</span>
            <h4>{notesdate.format('Do')}</h4>

        </div>

    </div>
  )
}