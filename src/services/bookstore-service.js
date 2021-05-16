export default class BookstoreService {

    data = [{
        id: 1,
        title: "Production-ready microservices",
        author: "Susan J.Fowler",
        price: 32,
        coverImage: "https://cdn1.ozone.ru/s3/multimedia-1/c500/6053943805.jpg"
    },{
        id: 2,
        title: "Harry Potter",
        author: "Rowling",
        price: 15,
        coverImage: "https://cdn1.ozone.ru/s3/multimedia-4/c500/6010504516.jpg" 
    }]

    getBooks(){
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() > 0.75){
                    reject(new Error("Something bad happened"));
                } else {
                    resolve(this.data)
                };
            }, 700)
        })
    }
}