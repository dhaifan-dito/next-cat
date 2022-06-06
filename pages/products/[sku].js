import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GET_PRODUCTS_BY_SKU, POST_SUBSCRIPTION } from 'pages/categories/schema';
import React from 'react'
import { Button } from '@material-ui/core';
import Image from 'next/image';
import useStyles from '@styles/style';

function ProductDetail() {
    const classes = useStyles()
    const router = useRouter();
    const {sku} = router.query;

     const {data:dataP} = useQuery(GET_PRODUCTS_BY_SKU, {
                 variables: {
                     sku
                 }
          });
          
        const [subscribe, { data}] = useMutation(POST_SUBSCRIPTION);

        const product = dataP?.products.items[0]
        const price = dataP?.products.items[0].price_range.maximum_price.regular_price

        let input;
      
  return (
    <div>
       <div className='flex-column'>
        <h2 >{product?.name}</h2>
        <div className='flex-around-80'>
        <Image src={product ? product?.image.url : "/vercel.svg"} alt={product?.name} width={300} height={300}/>
        <div className='flex-column'>
        <div dangerouslySetInnerHTML={{ __html: product?.description.html }} />
        <h3 style={{color:'darkred'}}>{price?.currency} {price?.value}</h3>
        </div>
        </div>
        
        
        

       </div>
        <div align="center">
          <h2>Subscribe Now</h2>
        <form
              onSubmit={e => {
                e.preventDefault();
                subscribe({ variables: { email: input.value } });
                input.value = '';
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
                placeholder="email"
              />
              <Button align='center' className={classes.root} style={{marginLeft:'10px', height:'20px'}} type="submit">subscribe</Button>
            </form>
            <p>{data?.subscribe.status.message}</p>
        </div>
    </div>
  )
}

export default ProductDetail