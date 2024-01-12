import { useDispatch, useSelector } from "react-redux"
import useForm from "../../hooks/useForm";
import { useEffect, useRef } from "react";
import { activeNote, startDeleting } from "../../actions/notes";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {

const {active:note}=useSelector(state=>state.notes)
const dispatch = useDispatch();
const [formValues,handleInputChange,resetValues] = useForm(note);
const {body , title, id} = formValues;

const activeId = useRef(note.id)

useEffect(() => {
  if(note.id !== activeId.current ) {
    resetValues(note);
    activeId.current=note.id;
  }

}, [note,resetValues])

useEffect(() => {
  dispatch(activeNote(formValues.id, {...formValues}))
  

}, [formValues,dispatch])

const handleDelete =()=>{
  dispatch(startDeleting(id))
}

  return (
    <div className="notes__main-conten">

            <NoteAppBar/>
            <div className="notes__content">
                <input 
                  type="text"
                  placeholder="some awesome tittle"
                  className="notes__tittle-input"
                  autoComplete="off"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                />
                 <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                 >

                 </textarea> 
                 {
                    (note.url)
                    && (         
                    <div className="notes__image">
                        <img
                          src={note.url} 
                          alt="img"
                        />
                    </div>
                    )
                 }
            </div>

            <button 
            className="btn btn-danger"
            onClick={handleDelete}
            >
                 Delete
            </button>
    </div>
  )
}