import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import ListItem from "./Components/ListItem";
import { useState } from "react";
import { PRODUCTS } from "./data";

function App() {
    const [product, setProduct] = useState(PRODUCTS);
    const onHandleChange = (newQuantity, productName) => {
        const newProducts = product.map((products) => {
            if (products.name !== productName) {
                return product;
            }
            const newProduct = {
                ...product,
                quantity: parseInt(newQuantity),
            };

            return newProduct;
        });
        setProduct(newProducts);
    };

    const Getprice = PRODUCTS.map((x) => x.quantity);
    const priceItem = PRODUCTS.map((x) => x.quantity * x.price);

    const subTotal = priceItem.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    const totalQuantity = Getprice.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    function removeProduct(name) {
        setProduct((products) =>
            products.filter((product) => product.name !== name)
        );
    }

    return (
        <div>
            <Header totalItems={totalQuantity}></Header>
            <section className="container">
                <ul className="products">
                    {PRODUCTS.map((product) => (
                        <ListItem
                            key={product.name}
                            product={product}
                            name={product.name}
                            onQuantityChange={onHandleChange}
                            onRemoveProduct={removeProduct}
                        />
                    ))}
                </ul>
            </section>
            <Checkout
                onclickCheckout={() => alert("check out")}
                subTotal={subTotal}
            ></Checkout>
        </div>
    );
}

export default App;
