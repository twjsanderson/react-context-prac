import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {

    // This takes any data attached to the value variable in the ThemeContext component\
    // We can then use that components state in our app below
    static contextType = ThemeContext;   

    render() {
        // this.context replaces this.props
        // console.log(this.context)

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
};

export default Navbar;