import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

function SSG({meals}) {

    console.log(meals)
  return (
    <div>
        <Link href="/"><p>home</p></Link>
        <h2>Meals List SSG</h2>
        {
                <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
                    {
                        meals && meals.map((meal) => (
                            
                            <div key={meal.idMeal} style={{margin:'16px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <h4 style={{color:'black'}}>{meal.strMeal}</h4>
                                <Image src={meal.strMealThumb} style={{marginBottom:'10px'}} alt={meal.strMeal} width={100} height={100}/>
                                <Link href={{pathname:`ssgDetail/${meal.idMeal}`}} >
                                    <button>detail</button>
                                </Link>                            
                            </div>
                        ))
                    }
                </div>
        }
    </div>
  )
}

export default SSG

export async function getStaticProps (){
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const result = await data.json();
    const meals = result.meals
    
    return {
        props:{meals}
    }
}
 