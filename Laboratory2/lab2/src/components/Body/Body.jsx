import { Component } from "react";
import "./Body.css";

export default class Body extends Component{
    getSelectedProducts() {
        return this.props.products.filter((product) => product.selected);
      }
    render(){
        const selectedProducts = this.getSelectedProducts();
        const selectedProductsNames = selectedProducts.map((product) => product.name);
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
                            {product.name}
                        </label>
                    </li>
                ))}
            </ol>
            <div className="selected-products">
                <h2>Вибрані товари: <span>{selectedProductsNames.join(", ")}</span></h2>
                <h2>Кількість обраних товарів: <span>{this.props.selectedProductsCount}</span></h2> 
            </div>
        </div>
    );
    }
}