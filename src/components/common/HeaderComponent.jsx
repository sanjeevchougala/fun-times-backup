import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderComponent extends Component {
    
    render() {
        
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/welcome" className="navbar-brand">Chougalas</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/counter">Counter</Link></li>
                        <li><Link className="nav-link" to="/tictactoe">Tic-Tac-Toe</Link></li>

                    </ul>
                   { /* <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul> */}
                </nav>
            </header>
        );
    }
}

//export default withRouter(HeaderComponent)