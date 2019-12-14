
import React from 'react';
import {Switch,Route,Link,useParams,useRouteMatch,useHistory,useLocation,Redirect} from 'react-router-dom';
import Num1 from './child/Num1';
import Num2 from './child/Num2';
import Num3 from './child/Num3'
export default function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let {url,path}=useRouteMatch();
    let location=useLocation();
    console.log(location)

 
    return (
        <div>
            {id}
            <Switch>
            
            <Route path={`${url}/num1`}>
                <Num1/>
            </Route>
            <Route path="`${path}/num2`">
                <Num2/>
            </Route>
            <Route path="`${path}/num3`">
                <Num3/>
            </Route>
        </Switch>
        </div>
        
    );
  }
  