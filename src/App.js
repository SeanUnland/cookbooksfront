import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {
  const url = "http://http://localhost:4000/";

  const [authors, setAuthors] = React.useState([]);

  const emptyAuthor = {
    firstName: "",
    lastName: "",
  };

  const [selectedAuthor, setSelectedAuthor] = React.useState(emptyAuthor);

  const getAuthors = () => {
    fetch(url + "/api/authors/")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      });
  };

  React.useEffect(() => {
    getAuthors();
  }, []);

  const handleCreate = (newAuthor) => {
    fetch(url + "/api/authors", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAuthor),
    }).then((response) => getAuthors());
  };

  const handleUpdate = (author) => {
    fetch(url + "/api/authors" + authors._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(author),
    }).then((response) => getAuthors());
  };

  const selectAuthor = (author) => {
    setSelectedAuthor(author);
  };

  const deleteAuthor = (author) => {
    fetch(url + "/api/authors" + author._id, {
      method: "delete",
    }).then((response) => getAuthors());
  };

  return (
    <div className="App">
      <h1>Authors</h1>
      <hr />
      <Link to="/create">
        <button>Add Author</button>
      </Link>
      <main>
        <Switch>
          <Route
            exact
            path="/api/authors"
            render={(rp) => (
              <Display
                {...rp}
                authors={authors}
                selectAuthor={selectAuthor}
                deleteAuthor={deleteAuthor}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="create"
                author={emptyAuthor}
                handleSubmit={handleCreate}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form
                {...rp}
                label="update"
                author={selectedAuthor}
                handleSubmit={handleUpdate}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}
