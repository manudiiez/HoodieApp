const Buzos = [

    {
        id: 0,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/wBSLsy6M/Sweater2.jpg',
        stock: 5,
        marca: 'Zara',
        tipo: 'Oversize',
        color: 'Verde',
        moda: 'Casual'
    },
    {
        id: 1,
        name: 'Buzo Skinny Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/xC2q2Kfv/Sweater3.jpg',
        stock: 5,
        marca: 'Zara',
        tipo: 'Skinny',
        color: 'Gris',
        moda: 'Casual'
    },
    {
        id: 2,
        name: 'Buzo deportivo Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/Wz94gCM8/Sweater4.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Oversize',
        color: 'Negro',
        moda: 'Deportivo'
    },
    {
        id: 3,
        name: 'Buzo Oversize Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/dVZ0ZWDR/Sweater5.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Oversize',
        color: 'Marron',
        moda: 'Casual'
    },
    {
        id: 4,
        name: 'Buzo Skinny Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/XN2NHMCc/Sweater6.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Skinny',
        color: 'Verde',
        moda: 'Casual'
    },
    {
        id: 5,
        name: 'Buzo Oversize Adidas',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/gknz1My9/Sweater7.jpg',
        stock: 5,
        marca: 'Adidas',
        tipo: 'Oversize',
        color: 'Negro',
        moda: 'Deportivo'
    },
    {
        id: 6,
        name: 'Buzo Oversize Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/wBSLsy6M/Sweater2.jpg',
        stock: 5,
        marca: 'Zara',
        tipo: 'Oversize',
        color: 'Verde',
        moda: 'Casual'
    },
    {
        id: 7,
        name: 'Buzo Skinny Zara',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/xC2q2Kfv/Sweater3.jpg',
        stock: 5,
        marca: 'Zara',
        tipo: 'Skinny',
        color: 'Gris',
        moda: 'Casual'
    },
    {
        id: 8,
        name: 'Buzo deportivo Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/Wz94gCM8/Sweater4.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Oversize',
        color: 'Negro',
        moda: 'Deportivo'
    },
    {
        id: 9,
        name: 'Buzo Oversize Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/dVZ0ZWDR/Sweater5.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Oversize',
        color: 'Marron',
        moda: 'Casual'
    },
    {
        id: 10,
        name: 'Buzo Skinny Nike',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/XN2NHMCc/Sweater6.jpg',
        stock: 5,
        marca: 'Nike',
        tipo: 'Skinny',
        color: 'Verde',
        moda: 'Casual'
    },
    {
        id: 11,
        name: 'Buzo Oversize Adidas',
        price: 20,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima iste minus qui eligendi, eveniet perferendis nulla. Aliquid, accusamus amet!',
        img: 'https://i.postimg.cc/gknz1My9/Sweater7.jpg',
        stock: 5,
        marca: 'Adidas',
        tipo: 'Oversize',
        color: 'Negro',
        moda: 'Deportivo'
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

export const getItem = (id) => {

    const task = new Promise((resolve) => {
        setTimeout(() => resolve(Buzos[id]), 2000)
    })

    return task

}

export const getNewItems = () => {
    const newBuzos = [Buzos[0], Buzos[1], Buzos[2], Buzos[3]]
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(newBuzos), 2000)
    })

    return task

}