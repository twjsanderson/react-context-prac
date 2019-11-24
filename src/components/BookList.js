import React from 'react';

class BookList extends React.Component {
    render () {
        return (
            <div className="book-list">
                <ul>
                    <li>The Name of The Wind</li>
                    <li>The Great Gatsby</li>
                    <li>The Dark Knight</li>
                </ul>
            </div>
        )
    }
}

export default BookList;