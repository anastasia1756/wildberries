const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://myproject-aaeeb-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('goods', JSON.stringify(data));
        });
    }

    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            getData();
        })
    })

}
getGoods();