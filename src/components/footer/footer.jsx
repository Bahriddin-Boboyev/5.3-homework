import React from "react";
import footer from './footer.module.scss'


export const Footer = () => {


  return <>
  <div className={footer.box}>
    <div className={footer.block}>
      <div className={footer.block2}>
          <h3>Rapture Athletics</h3>
      </div>
      <ul className={footer.list}>
        <li className={footer.item}>
          <h3>Links</h3>
          <div className={footer.box4}>
          <a href="/index">Home</a>
          <a href="/index">About</a>
          <a href="/index">Cart Page</a>
          <a href="/index">Contact Us</a>

          </div>
        </li>
        <li className={footer.item}>
          <h3>Contact</h3>
          <div className={footer.box4}>

          <a href="/index">Email</a>
          <a href="/index">LinkedIn</a>
          <a href="/index">Instagram</a>
          <a href="/index">Twitter</a>
          </div>
        </li>
        <li className={footer.item}>
          <h3>Collection</h3>
          <div className={footer.box4}>
          <a href="/index">Men</a>
          <a href="/index">Women</a>
          <a href="/index">Children</a>

          </div>
        </li>
      </ul>
    </div>
  </div>
  </>
}