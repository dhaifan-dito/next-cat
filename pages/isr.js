import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ISR({meals}) {

  return (
    <div>
        <Link href="/"><p>home</p></Link>
        <h2>Meals List ISR</h2>       
        {
                <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
                    {
                        meals && meals.map((meal) => (
                            <div key={meal.idMeal} style={{margin:'16px'}}>
                                <h4 style={{color:'black'}}>{meal.strMeal}</h4>
                                <Image src={meal.strMealThumb} style={{marginBottom:'10px'}} alt={meal.strMeal} width={100} height={100}/>
                            </div>
                        ))
                    }
                </div>   
        }
    </div>
  )
}

export default ISR;

export async function getStaticProps (){
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const result = await data.json();
    const meals = result.meals
    
    return {
        props:{meals},
        revalidate: 60
    }
}
 