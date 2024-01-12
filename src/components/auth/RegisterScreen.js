import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import validator from "validator"
import { useDispatch, useSelector } from "react-redux";
import { removeError, } from "../../actions/ui";
import { startLoginEmailPasswordName } from "../../actions/auth";
import Swal from "sweetalert2";

export const RegisterScreen = () => {

  const dispatch=useDispatch();
  const {msgError}=useSelector(state=>state.ui);
  //console.log(msgError);

  const [formValues, handleInputChange]=useForm({
    name:'Serguey',
    email:'serguey@gmail.com',
    password:'123456',
    password2:'123456',
    
  })
  const {name,email,password,password2}=formValues;
 
 
  const handleRegister=(e)=>{
    e.preventDefault();
    if(isFormValid()){
      dispatch(startLoginEmailPasswordName(email,password,name))
      
    }
  } 

  const isFormValid=()=>{
    if(name.trim().length===0){
      Swal.fire('Error', 'You must write a name', 'error'   )
      return false;
    } 
    if(!validator.isEmail(email)){
      //dispatch(setError('error email'))
      Swal.fire('Error', 'You must write a correct email', 'error'   )
      return false;
    }
    if(password!==password2 || password.length<=5){
      //dispatch(setError('error pass'))
      Swal.fire('Error', 'The passwords must be a same and must have more than 6 characters', 'error'   )
      return false;
    }
      
    dispatch(removeError())
    return true;
  }

  return (
    <div>
        <h3 className="auth__tittle">Register</h3>
        <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
        >
        {
          msgError &&
          (<div className="auth__alert-error">
            {msgError}
          </div>)
        }

        
        <input
            type="text"
            placeholder="Name"
            name="name" 
            className="auth__input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email" 
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
           <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
           <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            value={password2}
            onChange={handleInputChange}
          />
          <button
              className="btn btn-primary btn-block mb-1"
             // disabled={true}
              type="submit"
              onClick={handleRegister}
          >
            Register
          </button>


          <Link
           className="link"
           to={"/auth/login"}>  
              Already registered?
          </Link>
        </form>
    </div>
  )
}