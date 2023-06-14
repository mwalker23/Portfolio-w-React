import React from "react";

export default function Contact() {
  return (
    <main className="container">
      <div className="row">
        <div className="mb-3 mt-4">
          <h1>Contact Page</h1>
          <label for="exampleFormControlInput1" className="form-label">
            {" "}
            Name:
          </label>
          <input
            type={"name"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name here"
          ></input>
          <label for="exampleFormControlInput1" className="form-label">
            {" "}
            Email address:
          </label>
          <input
            type={"email"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={"3"}
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
