const Product = require('../models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop');

const products = [
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142',
        title: 'The Game Of Throns',
        description: 'Winter is comming',
        price: 10
    }),
    new Product({
        imagePath: 'http://watchersonthewall.com/wp-content/uploads/2016/01/housess6.jpg',
        title: 'The Game Of Throns three houses',
        description: 'stark , Lannister and Targaryen',
        price: 20
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6qISV9KWWSs0hrNPl_-IvUkcv6FHX4o4QbK3VyKC7Zj-E_JhVw',
        title: 'The Game Of Throns',
        description: 'Winter is comming',
        price: 30
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6qISV9KWWSs0hrNPl_-IvUkcv6FHX4o4QbK3VyKC7Zj-E_JhVw',
        title: 'The Game Of Throns',
        description: 'Winter is comming',
        price: 15
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6qISV9KWWSs0hrNPl_-IvUkcv6FHX4o4QbK3VyKC7Zj-E_JhVw',
        title: 'The Game Of Throns',
        description: 'Winter is comming',
        price: 35
    }),
    new Product({
        imagePath: 'http://big5kayakchallenge.com/wp-content/uploads/2018/01/nice-game-of-thrones-wallpaper-1920x1080-stark-got-house-stark-wallpapers-to-your-cell-phone-game-of-thrones-wallpaper-1920x1080-stark.jpg',
        title: 'The Game Of Throns',
        description: 'Winter is comming',
        price: 50
    })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

let exit = () => {
    mongoose.disconnect();
}