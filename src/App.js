import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import ListItem from "./Components/ListItem";
import { useState } from "react";
import { PRODUCTS, DISCOUNTS } from "./data";

function App() {
    const [products, setProducts] = useState(PRODUCTS);

    const [discounts, setDiscounts] = useState(DISCOUNTS);

    const onHandleChange = (newQuantity, productName) => {
        const newProducts = products.map((products) => {
            if (products.name !== productName) {
                return products;
            }
            const newProduct = {
                ...products,
                quantity: parseInt(newQuantity),
            };

            return newProduct;
        });
        setProducts(newProducts);
    };

    const Getprice = products.map((x) => x.quantity);
    const priceItem = products.map((x) => x.quantity * x.price);

    const subTotal = priceItem.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    const totalQuantity = Getprice.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    function removeProduct(name) {
        setProducts((products) =>
            products.filter((product) => product.name !== name)
        );
    }

    function discount(discount) {
        alert("abc");
    }

    return (
        <div>
            <Header totalItems={totalQuantity}></Header>
            <section className="container">
                <ul className="products">
                    {products.map((product) => (
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
                discounts={discounts}
                getDiscount={discount}
            ></Checkout>
        </div>
    );
}

export default App;
