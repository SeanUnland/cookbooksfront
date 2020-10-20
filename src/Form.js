import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.authors);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
