import React from 'react'
import { GET_CATEGORY_BY_ID, GET_PRODUCTS_BY_CATEGORY } from './schema'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { ListItemAvatar } from '@material-ui/core';
import { Button } from '@material-ui/core'
import Image from 'next/image'
import useStyles from '@styles/style';

function CategoryDetail() {
    const classes = useStyles();
    const router= useRouter()
    const {id} = router.query;

      const {data} = useQuery(GET_CATEGORY_BY_ID, {
          variables: {
              categoryId:id
          }
      });

      const category = data?.category;

    const {data:dataP} = useQuery(GET_PRODUCTS_BY_CATEGORY, {
      variables: {
        categoryId:id
      }
    });

    const product = dataP?.products.items;

  return (
    <div>
        <h2>Detail Category</h2>
        <p>Products of <span style={{fontWeight:'bold'}}>{category?.name}</span> category</p>
        <div className="grid-4 margin20">
        {
            product?.map((item)=>{
                return (
                    <Link href={`/products/${item.sku}`} key={item.id}>
                      <div>
                        <div align="center">
                        <Image src={item.image.url} alt={ListItemAvatar.name} width={100} height={100}/>
                        </div>
                        <Button className={classes.root} align='center' style={{width:'80%', marginBottom:"10px"}}>{item.name}</Button>
                        </div>
                    </Link>
                )
            })
        }
        </div>
    </div>
  )
}

export default CategoryDetail