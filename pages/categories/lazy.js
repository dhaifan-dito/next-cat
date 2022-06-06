import { useLazyQuery } from '@apollo/client'
import React from 'react'
import { GET_CATEGORIES } from './schema'
import Link from 'next/link';

const Lazy = () => {
    const [getLazy, {loading, error, data}]=useLazyQuery(GET_CATEGORIES);

    if (loading) return <p>Please wait, Loading...</p>;
    if (error) {return `Error : ${error.message}`};

    console.log(data?.categories.items)

  return (
    <div>
        <h2>Lazy Queries</h2>
        <button onClick={()=>getLazy()} >
            Lazy Button
        </button>
        {
            data?.categories.items && data.categories.items.map((item)=>{
                return (
                    <Link href={`/categories/${item.id}`} key={item.id}>
                        <p>{item.name}</p>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Lazy