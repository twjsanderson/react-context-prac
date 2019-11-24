import React, { createContext } from 'react';

// 1) create context in a component
// 2) return JSX with Provider inside (ie. ThemeContext.Provider)
// 2.5) state is passed into the Provider
// 3) use ThemeContext.Provider tags in another component that wants to use that context

// delcare and invoke a new context
export const ThemeContext = createContext();

// create a component with state that will contain 
// that data we want to share between different components
class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd' , bg: '#eee'}, 
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>

            </ThemeContext.Provider>
        );
    }

}

export default ThemeContextProvider;