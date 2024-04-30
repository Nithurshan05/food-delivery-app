import data from "../../productData.json";

const categories = [
    {
        id:1,
        title:"All",
        products: data.products,
    },
    {
        id:2,
        title:"Fast Foods",
        products: [...data.products.slice(1,3,4,5)],
    },
    {
        id:3,
        title:"Briyani",
        products: [...data.products.slice(7,8)],
    },
    {
        id:4,
        title:"Drinks",
        products: [...data.products.slice(2,6)],
    }
];

export default categories;