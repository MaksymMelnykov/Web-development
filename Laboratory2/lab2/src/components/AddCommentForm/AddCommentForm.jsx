import React from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";

const MyTextArea = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const MyButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

const AddCommentForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ comment: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.comment) {
          errors.comment = "Обов'язково для заповнення";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form onSubmit={handleSubmit}>
        <div>
          <h3>Додати коментар:</h3>
          <Field
            name="comment"
            component={MyTextArea}
            placeholder="Напишіть свій коментар"
          />
          <ErrorMessage
            name="comment"
            component="div"
            style={{ color: "red" }}
          />
        </div>
        <MyButton type="submit">Додати коментар</MyButton>
      </Form>
    </Formik>
  );
};

export default AddCommentForm;
