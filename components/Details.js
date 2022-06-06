import React from 'react'
import Image from 'next/image'

function Details(meals) {
    const meal=meals.meals
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <h1>{meal.strMeal}</h1>
    <Image src={meal.strMealThumb} alt={meal.strMeal} width={100} height={100}/>
    <p style={{width:'50%'}}><span style={{fontWeight:'bold'}}>How To Cook {meal.strMeal}:</span> {meal.strInstructions}</p>
    </div>
  )
}

export default Details