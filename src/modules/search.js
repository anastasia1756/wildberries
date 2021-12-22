import { renderGoods } from './getGoods';

const search = function () {
    'use strict';
  const input = document.querySelector('.search-block > input');
  const searchBtn = document.querySelector('.search-block > button');


  const getData = (value) => {
    fetch('https://wildberries-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        const array = data.filter((good) =>
          good.name.toLowerCase().includes(value.toLowerCase())
        );

        localStorage.setItem('goods', JSON.stringify(array));

        if (!window.location.pathname.includes('goods.html')) {
          window.location.href = 'goods.html';
        } else {
          renderGoods(array);
        }
      });
  };

  searchBtn.addEventListener('click', () => {
    getData(input.value);
  });
};

export default search;
