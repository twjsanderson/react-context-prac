import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends React.Component {
    // using the Consumer we can do the same thing as before but import the context
    // inside of the return and deal with state internally
    // we can use the Consumer in functional components and use multiple contexts inside one component
    
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax}}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                { isAuthenticated ? 'Logged In' : 'Logged Out' }
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
    }
};

export default Navbar;