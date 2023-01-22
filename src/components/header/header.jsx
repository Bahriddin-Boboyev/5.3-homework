import React from "react";
import header from './header.module.scss'
import search from './img/search.svg'
import korzinka from './img/korzinka.svg'
import user from './img/user.svg'


export const Header = (count) => {


  return <>
    <nav className={header.nav}>
      <div className={header.box_right}>
      <h1>Rapture Athletics</h1>
      </div>
      <ul className={header.list}>
        <li className={header.item}>
          <a href="#">Men</a>
        </li>
        <li className={header.item}>
          <a href="#">Women</a>
        </li>
        <li className={header.item}>
          <a href="#">Kids</a>
        </li>
        <li className={header.item}>
          <a href="#">Customize</a>
        </li>
        <li className={header.item}>
          <a href="#">Customize</a>
        </li>
      </ul>
      <div className={header.box_left}>
        <button className={header.btn}><img src={search} alt="img" /></button>
        <button className={header.btn}><img src={korzinka} alt="img" /><button className={header.korzinkaCount}>{count.count}</button></button>
        <button className={header.btn}><img src={user} alt="img" /></button>
      </div>

    </nav>
  </>
}