const Buzos = [

    {
        id: 0,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/wBSLsy6M/Sweater2.jpg',
        stock: 5,

    },
    {
        id: 1,
        name: 'Buzo Slim Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/xC2q2Kfv/Sweater3.jpg',
        stock: 5,

    },
    {
        id: 2,
        name: 'Buzo deportivo Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/Wz94gCM8/Sweater4.jpg',
        stock: 5,

    },
    {
        id: 3,
        name: 'Buzo Oversize Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/dVZ0ZWDR/Sweater5.jpg',
        stock: 5,

    },
    {
        id: 4,
        name: 'Buzo Slim Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/XN2NHMCc/Sweater6.jpg',
        stock: 5,

    },
    {
        id: 5,
        name: 'Buzo Oversize Adidas',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/gknz1My9/Sweater7.jpg',
        stock: 5,

    },
    {
        id: 6,
        name: 'Buzo Deportivo Adidas',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/wBSLsy6M/Sweater2.jpg',
        stock: 5,

    },
    {
        id: 7,
        name: 'Buzo Slim Adidas',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/xC2q2Kfv/Sweater3.jpg',
        stock: 5,

    },
    {
        id: 8,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/Wz94gCM8/Sweater4.jpg',
        stock: 5,

    },
    {
        id: 9,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/dVZ0ZWDR/Sweater5.jpg',
        stock: 5,

    },
    {
        id: 10,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/XN2NHMCc/Sweater6.jpg',
        stock: 5,

    },
    {
        id: 11,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/gknz1My9/Sweater7.jpg',
        stock: 5,

    }

]

export const data = new Promise((resolve, reject) => {

    let condition = true

    setTimeout(()=>{
    if(condition){
        resolve(Buzos)
    }else{
        reject('Salio mal :( no hay buzos')
    }
    }, 2000)

})