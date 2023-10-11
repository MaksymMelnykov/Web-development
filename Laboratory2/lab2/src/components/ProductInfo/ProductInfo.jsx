import React, { Component } from 'react';
import "./ProductInfo.css";

export default class ProductInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            comment: '',
            productDescription: "Пшеничний хліб - це вид хліба, виготовлений із пшеничного борошна, води, дріжджів або закваски, а також солі та інших інгредієнтів, таких як цукор, олія або молоко. Пшеничний хліб має світлий колір і м'яку м'якушку. Він є одним із найпопулярніших видів хліба в світі. Цей продукт має безліч смакових та текстурних варіацій, але основна його характеристика - це смачний, ароматний і соковитий хліб, який може задовольнити різні смаки та вимоги споживачів. Основними інгредієнтами пшеничного хліба є: Пшеничне борошно - це основний інгредієнт пшеничного хліба. Воно забезпечує хлібові структурою та поживними речовинами. Вода - це другий основний інгредієнт пшеничного хліба. Вона допомагає розчинити борошно та дріжджі, а також забезпечує хліб вологою. Дріжджі або закваска - це те, що змушує хліб підніматися. Дріжджі - це одноклітинні організми, які виробляють вуглекислий газ, який піднімає хліб. Закваска - це суміш борошна та води, яка ферментується бактеріями та дріжджами. Сіль - це смаковий інгредієнт, який також допомагає стримувати зростання дріжджів. Інші інгредієнти, які можна додати до пшеничного хліба, включають: Цукор - це підсолоджувач, який також допомагає дріжджам підніматися. Олія або молоко - це жири, які роблять хліб м'якшим і соковитішим. Насіння, горіхи або сухофрукти - це додаткові смаки та поживні речовини."
        };
    }

    handleCommentChange = (e) => {
        this.setState({comment: e.target.value});
    };

    handleSubmitComment = (e) => {
        e.preventDefault();
        const { comment, comments } = this.state;
        if (comment.trim() === "") {
            alert("Введіть коментар!");
            return;
        }
        console.log('Ваш відгук: ', comment); 
        alert('Ваш відгук: "' + comment + '" додано успішно!'); 
        this.setState({ comments: [...comments, comment], comment: "" });
    };

    render(){
        const {comment, comments, productDescription} = this.state;
        const {id, name} = this.props;
        
        return(
            <div className="product-info">
                <div className="about-good">
                    <h2>Товар: {name} (ID: {id})</h2>
                    <p>{productDescription}</p>
                </div>
                <div className="comments">
                    <h3>Коментарі:</h3>
                    <div className='all-comments'>
                        {comments.map((comment, index) => { return(
                            <div key={index} className='new-comment'>
                                <h4><img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="User icon" />User</h4>
                                <h5>{comment}</h5>
                            </div>
                        )
                        })}
                    </div>
                </div>
                <div className="form-comments">
                    <form onSubmit={this.handleSubmitComment}>
                        <div>
                        <h3>Додати коментар:</h3>
                        <textarea
                            value={comment}
                            onChange={this.handleCommentChange}
                            placeholder="Напишіть свій коментар"
                        />
                        </div>
                        <button type="submit">Додати коментар</button>
                    </form>
                </div>
            </div>
        )
    }
}