import React, { useContext, useState } from "react";
import { ProductInfoData } from "../ProductInfo/ProductInfo";

const ProductsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("Введіть коментар!");
      return;
    }

    const newComment = `${comment} ${new Date().toLocaleString()}`;
    console.log("Ваш відгук: ", newComment);
    alert(`Ваш відгук: "${newComment}" додано успішно!`);

    setComments([...comments, newComment]);
    setComment("");
  };
  const { id, name, description } = useContext(ProductInfoData);
  return (
    <div className="product-info">
      <div className="about-good">
        <h2>
          Товар: {name} (ID: {id})
        </h2>
        <p>{description}</p>
      </div>
      <div className="comments">
        <h3>Коментарі:</h3>
        <div className="all-comments">
          {comments.map((comment, index) => (
            <div key={index} className="new-comment">
              <h4>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                  alt="User icon"
                />
                User
              </h4>
              <h5>{comment}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="form-comments">
        <form onSubmit={handleSubmitComment}>
          <div>
            <h3>Додати коментар:</h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Напишіть свій коментар"
            />
          </div>
          <button type="submit">Додати коментар</button>
        </form>
      </div>
    </div>
  );
};

export default ProductsPage;
