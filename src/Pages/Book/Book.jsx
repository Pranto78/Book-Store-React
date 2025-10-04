import React, { Suspense, useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Book = ({data}) => {

    // const [allBooks,setAllBooks] = useState([]);

    // One way to fetch Data
    // useEffect(()=>{

    //     fetch('booksData.json')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })

    // },
    // [])

    // const bookPromise = fetch('./booksData.json').then(res=>res.json());

    return (
        <div>
                <h1 className='text-3xl text-center p-7'>I am Book</h1>

                <Suspense fallback={<span>Loading......</span>}>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                        data.map((singleBook)=> <SingleBook key={singleBook.bookId} singleBook={singleBook}></SingleBook>)
                        }
                    </div>

                </Suspense>
        </div>
    );
};

export default Book;