import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.authors);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
  };
};

export default Form;
