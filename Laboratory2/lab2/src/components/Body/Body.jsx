import { Component } from "react";
import "./Body.css";
import ProductInfoButton from "../ProductInfoButton/ProductInfoButton";

export default class Body extends Component{
    constructor() {
        super();
        this.state = {
          showInUSD: false, 
        };
      }

      getSelectedProducts() {
        return this.props.products.filter((product) => product.selected);
      }
      convertToUSD = (priceInUAH) => {
        if(this.props.convertToUSD){
            return this.props.convertToUSD(priceInUAH);
        }
        return priceInUAH;
      }
      toggleCurrencyDisplay = () => {
        this.setState((prevState) => ({
          showInUSD: !prevState.showInUSD,
        }));
      };
      
    render(){
        const selectedProducts = this.getSelectedProducts();
        const selectedProductsNames = selectedProducts.map((product) => product.name);
    
        const currencyButtonText = this.state.showInUSD ? "Ціна в гривнях" : "Ціна в доларах";

        return(
        <div className="body">
            <h2>Тіло</h2>
            <h2>Список товарів</h2>
            <ol>
                {this.props.products.map((product) => (
                    <li key={product.id}>
                        <label>
                            <input type="checkbox" 
                            checked={product.selected}
                            onChange={() => this.props.onProductSelect(product.id)}/>
                            {product.name}, ціна: {" "}
                            {this.state.showInUSD ? this.convertToUSD(product.price) + " USD" : product.price + " грн"} од/кг. 
                        </label>
                    </li>
                ))}
            </ol>
            <div className="selected-products">
                <h2>Вибрані товари: <span>{selectedProductsNames.join(", ")}</span></h2>
                <h2>Кількість обраних товарів: <span>{this.props.selectedProductsCount}</span></h2> 
            </div>
            <div className="productInfo-currency">
                <ProductInfoButton></ProductInfoButton>
                <button onClick={this.toggleCurrencyDisplay}>{currencyButtonText}</button>
            </div>
        </div>
    );
    }
}