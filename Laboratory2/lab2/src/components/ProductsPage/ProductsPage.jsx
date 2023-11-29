import React, { useContext, useState } from "react";
import { ProductInfoData } from "../ProductInfo/ProductInfo";
import styles from "../ProductInfo/ProductInfo.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import { ErrorMessage, Formik } from "formik";

const ProductsPage = () => {
  const [comments, setComments] = useState([]);
  const { id, name, description } = useContext(ProductInfoData);

  const handleSubmitComment = (values, { resetForm }) => {
    if (values.comment.trim() === "") {
      alert("Введіть коментар!");
      return;
    }
    const newComment = `${values.comment}. ${new Date().toLocaleString()}`;
    console.log("Ваш відгук: ", newComment);
    alert(`Ваш відгук: "${newComment}" додано успішно!`);

    setComments([...comments, newComment]);
    resetForm();
  };

  return (
    <div className={styles.product_info}>
      <div className={styles.wrapper_good}>
        <div className={styles.about_good}>
          <h2>
            Товар: {name} (ID: {id})
          </h2>
          <p>{description}</p>
        </div>
        <div className={styles.form_comments}>
          <Formik
            initialValues={{ comment: "" }}
            onSubmit={handleSubmitComment}
          >
            {({ handleSubmit }) => (
              <AddCommentForm handleSubmit={handleSubmit} />
            )}
          </Formik>
        </div>
        <div className={styles.comments}>
          <h3>Коментарі:</h3>
          <TransitionGroup className={styles.all_comments}>
            {comments.map((comment, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div className={styles.new_comment}>
                  <h4>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                      alt="User icon"
                    />
                    User
                  </h4>
                  <h5>
                    {index + 1}. {comment}
                  </h5>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
