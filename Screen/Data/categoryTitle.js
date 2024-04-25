import products from "./ProductData";

const categories = [
    {
        id:1,
        title:"All",
        products: products,
    },
    {
        id:2,
        title:"Fast Foods",
        products: [...products.slice(1,3)],
    },
    {
        id:3,
        title:"Briyani",
        products: [...products.slice()],
    },
    {
        id:4,
        title:"Drinks",
        products: [...products.slice(2)],
    }
];

export default categories;