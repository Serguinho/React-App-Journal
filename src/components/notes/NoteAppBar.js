import { useDispatch, useSelector } from "react-redux"
import { startSaveNote, startUploadingFile } from "../../actions/notes";


export const NoteAppBar = () => {

  const dispatch=useDispatch();
  const {active:note}=useSelector(state=>state.notes)
  
 
  const handlePictureUpload=()=>{
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange=(e)=>{
   const file = e.target.files[0];
   if(file){
    dispatch(startUploadingFile(file));
   }
  }

  const handleSaveNote=()=>{
    dispatch(startSaveNote(note))
  }
  return (
    <div className="notes__appbar">
        <span>28 de agosto de 2020</span>
        <input
          id="fileSelector"
          name="target"
          type="file"
          style={{display:'none'}}
          onChange={handleFileChange}
        />
        <div>
            <button 
            className="btn"
            onClick={handlePictureUpload}
            >
                Picture
            </button>

            <button 
            className="btn"
            onClick={handleSaveNote}
            >
                Save
            </button>
        </div>
    </div>
  )
}