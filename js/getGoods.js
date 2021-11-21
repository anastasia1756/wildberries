const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
    const goodsContainer = document.querySelector('.long-goods-list');
console.log(goodsContainer);
    }

    const getData = (value, category) => {
        fetch('https://myproject-aaeeb-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => {
            const array = category ? data.filter(item => item[category] === value) : data;
        

            localStorage.setItem('goods', JSON.stringify(array));

            if(window.location.pathname !== '/goods.html') {
                window.location.href = '/goods.html';
            } else {
                renderGoods(array);
            }
        });
    }

    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const linkValue = link.textContent;
            const category = link.dataset.field;

            getData(linkValue, category);
        })
    })

    if(window.location.pathname === '/goods.html' && localStorage.getItem('goods')) {
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }
}
getGoods();