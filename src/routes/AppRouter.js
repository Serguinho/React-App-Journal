

import {
    BrowserRouter as Router,
    Switch,
    Redirect
   
  } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch=useDispatch();
  
const [checking, setcheckign] = useState(true);

const [isLoggedIn, setisLoggedIn] = useState(false)




  useEffect(() => {
      firebase.auth().onAuthStateChanged(async(user)=>{
          if(user?.uid){
            dispatch(login(user.uid,user.displayName));
            setisLoggedIn(true);
     
           dispatch(startLoadingNotes(user.uid));
          }
          else{
            setisLoggedIn(false);
          }
          setcheckign(false);
      });
  
  }, [dispatch, setcheckign, setisLoggedIn])
  
  
  if(checking){
    return (
      <h1> Wait...</h1>
    )
  }
  
  
  
  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                    isAuthenticated={isLoggedIn}
                    path={"/auth"}
                    component={AuthRouter}
                />
                 <PrivateRoute
                    exact
                    isAuthenticated={isLoggedIn}
                    path={"/"}
                    component={JournalScreen}
                />
                <Redirect
                to={"/auth/login"}
            />
            </Switch>
        </div>
    </Router>
  )
}