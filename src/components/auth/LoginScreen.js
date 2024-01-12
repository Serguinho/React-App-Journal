import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {

  const dispatch=useDispatch();
  const {loading} = useSelector(state=>state.ui)

  const [formValues, handleInputChange]=useForm({
    email:'serguey@gmail.com',
    password:'123456'
    
  })
  const {email,password}=formValues;

 
  const handleLogin=(e)=>{ 
    e.preventDefault();
    dispatch(startLoginEmailPassword(email,password))
  } 
  const handleLoginWithGoogle=()=>{
    dispatch(startGoogleLogin());
  } 

  return (
    <div>
        <h3 className="auth__tittle">Login</h3>
        <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleLogin}
        
        >
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
            className="auth__input"
            value={password}
            onChange={handleInputChange}
          />
          <button
              className="btn btn-primary btn-block"
              disabled={loading}
              type="submit"
          >
            Login
          </button>
          
          <div className="auth__social-networks">
            <p> Login with a social networks </p>
            <div 
                className="google-btn"
                onClick={handleLoginWithGoogle}
            >
                <div className="google-icon-wrapper">
                <img className="google-icon" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
          </div>
          <Link
           className="link"
           to={"/auth/register"}>  
              Create new account
          </Link>
        </form>
    </div>
  )
}