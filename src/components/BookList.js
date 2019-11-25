import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
    // This takes any data attached to the value variable in the ThemeContext component\
    // We can then use that components state in our app below
    // We can ONLY use static contexttype... in class based components
    static contextType = ThemeContext;

    render () {
        // this.context replaces this.props
        // console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{background: theme.ui }}>The Name of The Wind</li>
                    <li style={{background: theme.ui }}>The Great Gatsby</li>
                    <li style={{background: theme.ui }}>The Dark Knight</li>
                </ul>
            </div>
        )
    }
}

export default BookList;