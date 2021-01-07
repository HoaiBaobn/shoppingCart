function Checkout({ subTotal, onclickCheckout, getdiscount, discounts }) {
    return (
        <section className="container">
            <div className="promotion">
                <label htmlFor="promo-code">Have A Promo Code?</label>
                <input type="text" id="promo-code" />
                <button
                    onClick={() => getdiscount(discounts.discount)}
                    type="button"
                />
            </div>
            <div className="summary">
                <ul>
                    <li>
                        Subtotal <span>${subTotal}</span>
                    </li>
                    <li>
                        Tax <span>${subTotal * 0.1}</span>
                    </li>
                    <li>
                        Discount
                        <span>${subTotal * (discounts.discount / 100)}</span>
                    </li>
                    <li className="total">
                        Total <span>${subTotal + subTotal * 0.1}</span>
                    </li>
                </ul>
            </div>
            <div className="checkout">
                <button onClick={onclickCheckout} type="button">
                    Check Out
                </button>
            </div>
        </section>
    );
}
export default Checkout;
