class Product {
    id;
    title;
    manufacture;
    price;

    constructor(id, title, manufacture, price) {
        this.id = id;
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;
    }
}

class Milk extends Product {
    fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.fat = fat;
    }
}

class Chocolate extends Product {
    kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.kind = kind;
    }
}

class Wine extends Product {
    alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.alcohol = alcohol;
    }
}

class Store {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (this.products.find(t => t.id === product.id))
            return false;
        else {
            this.products.push(product);
            return true;
        }
    }

    getAll() {
        return [...this.products];
    }

   /* getByType(type) {
        let productsOfType = store.products.map(function (item) {
            if (this.item.constructor.name === type) {
                productsOfType.push(item);
                return console.log(productsOfType);
            } else {
                console.log('Type is not found!')
            }
        })
    }*/
};

const store = new Store();
const myProduct = new Product(12, 'Meat', 'local', 60);
const myMilk = new Milk(222, 'Village', 'Halav', 8, 15);
const myChocolate = new Chocolate(333, 'Marzipan', 'Carstens', 15, 66);
const myWine = new Wine(444, 'Adom', 'B&B', 35, 12);

store.addProduct(myProduct);
store.addProduct(myMilk);
store.addProduct(myChocolate);
store.addProduct(myWine);
console.log(store);

store.getAll().forEach(item => {
        console.log(item)
    }
);

/*store.getByType('Milk');*/




