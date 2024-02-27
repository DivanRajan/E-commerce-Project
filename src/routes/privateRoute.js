import react from 'react';
import { Route,redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component,isAuthenticated,...rest}) =>{
<Route
{...rest}
render={(props)=>{isAuthenticated?(<Component {...props}/>):(redirect('/'))}}
/>
};

export default PrivateRoute;