import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a class="heading" href="#/">
          <h1 class="heading">Order Your PIZZA!!!!!</h1>
        </a>
      </div>
      <div>
        <a class="carthead" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        {/* <a class="signhead" href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}