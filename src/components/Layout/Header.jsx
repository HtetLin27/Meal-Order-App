import React, { Fragment } from 'react'

import mealsImgae from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header} >
        <div className={classes.container}>
          <h1>ReactMeals</h1>
          <HeaderCartButton/>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img width='100%' height='400px' src={mealsImgae} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  )
}

export default Header
 