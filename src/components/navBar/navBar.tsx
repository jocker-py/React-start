import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cl from './navBar.module.css';
import logo from '../../assets/glasses.png';

const NavBar: FC = () => {
  const getClass = (isActive: boolean) => (isActive ? cl.activeLink : cl.navLink);
  return (
    <div className={cl.navbar}>
      <div className={cl.navLogo}>
        <Link className={cl.navLink} to="/">
          LookStore
        </Link>
        <img alt="logo" src={logo} className={cl.navImg} />
      </div>
      <div className={cl.navLinks}>
        <NavLink
          className={({ isActive }) => getClass(isActive)}
          to="/products"
          data-testid="products-link"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => getClass(isActive)}
          to="/about"
          data-testid="about-link"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => getClass(isActive)}
          to="/create-new-card"
          data-testid="create-new-card-link"
        >
          Create new Card
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
