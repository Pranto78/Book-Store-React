import React, { useEffect, useState } from 'react';

const Book = () => {

    const [allBooks,setAllBooks] = useState([]);

    useEffect(()=>{

        fetch('booksData.json')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })

    },
    [])

    return (
        <div>
                <h1>I am Book</h1>
        </div>
    );
};

export default Book;