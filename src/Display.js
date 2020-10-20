import React from "react";

const Display = (props) => {
  const { authors } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {authors.map((author) => (
        <article>
          <h1>{author.firstName}</h1>
          <h3>{author.lastName}</h3>
          <button
            onClick={() => {
              props.selectAuthor(author);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.deleteAuthor(author);
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );

  return authors.length;
};

export default Display;
