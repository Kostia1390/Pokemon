import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../assets/img/emptyPockemon.svg';

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Команда відсутя <icon>😕</icon>
        </h2>
        <p>
          Верогідніше всего, ви ще не зібрали команду.
          <br />
          Для того, щоб зібрати команду, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
