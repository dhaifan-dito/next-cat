import React from 'react'
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_CATEGORIES } from './schema';
import { Button } from '@material-ui/core';
import useStyles from '@styles/style';
import Skeleton from '@material-ui/lab/Skeleton';

function Categories() {
    const classes = useStyles()
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return (
        <div align="center" className="margin20">
        <Skeleton align='center' variant="rect" width={210} height={40} />
        <div className='grid-4 margin20'>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      <Skeleton variant="rect" width={210} height={50} align="center" className="marginBottom10"/>
      </div>
        </div>
    );
    if (error) {return `Error : ${error.message}`}

    console.log(data.categories.items)

  return (
    <div>
        <h2 align='center'>Queries</h2>
        <div className="grid-4 margin20">
        {
            data.categories.items && data.categories.items.map((item)=>{
                return (
                    <Link href={`/categories/${item.id}`} key={item.id}>
                        <div align='center'>
                        <Button  className={classes.root} style={{width:'80%', marginBottom:"10px"}}>{item.name}</Button>
                        </div>
                    </Link>
                )
            })
        }
        </div>
    </div>
  )
}

export default Categories
