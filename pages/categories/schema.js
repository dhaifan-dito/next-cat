import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categories(filters:{}) {
            items {
                name
                id
                image
            }
        }
    }
`;

export const GET_CATEGORY_BY_ID = gql`
    query getCategories($categoryId: Int) {
        category(id: $categoryId) {
            name
            id
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getProducts($categoryId: String) {
        products(filter:{category_id:{eq:$categoryId}} ) {
            items {
                name
                sku
                categories {
                    id
                    name
                }
                image {
                    url
                }
            }
        }
    }
`;

export const GET_PRODUCTS_BY_SKU = gql`
    query getProductsSku($sku: String) {
        products (filter:{sku:{eq:$sku}})
   {
    items {
        name
        sku
        price_range {
          maximum_price {
            regular_price {
              currency
              value
            }
          }
        }
        image {
          url
        }
        description {
          html
        }
        
              categories{
          name
        }
    }
  }
    }
`

export const POST_SUBSCRIPTION = gql`
    mutation subscribe($email: String) {
        subscribe(input: {email: $email}) {
            status {
              code
              message
              response
            }
          }
    }
`;

import React from 'react'

function schema() {
  return (
    <div>schema</div>
  )
}

export default schema