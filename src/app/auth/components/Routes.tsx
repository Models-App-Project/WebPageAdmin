import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from  '../login/page'; 
import Register from "../register/page";
import ResetPassword from '../resetpassword/page';

const Routes = () =>{
    <Router>
        <Switch>
            {/*define rotas aqui, assim que criarmos mais páginas adicionaremos suas respectivas rotas aqui*/}
            <Route exact path="/" component={Login} />
            <Route exact path="/" component={Register} />
            <Route exact path="/" component={ResetPassword} />

        </Switch>
    </Router>
}

export default Routes;