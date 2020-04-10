import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { UglyThingsContext } from "./UglyThingsContext";

function UglyThing(props) {
  return (
    <div key={props.item["uuid"]}>
      <div>{props.item["title"]}</div>
      <div>{props.item["description"]}</div>

      <div className="image-wrapper">
        <img src={props.item.url} alt="" className="ugly-thing-image" />

        <div className="delete-box-container">
          <div
            className="delete-child"
            onClick={() => {
              props.removeUglyThing(props.item["uuid"]);
            }}
          >
            <div className="svg-container">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                ariaHidden="true"
                role="presentation"
              >
                <path
                  color="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <input name="describetheugly" placeholder="Why is it ugly?" />
      </div>
    </div>
  );
}

class App extends React.Component {
  state = {
    RenderedPosts: [],
    deleteActivated: false,
    itemsToDelete: [],
  };
  handleSubmit = (e, context) => {
    e.preventDefault();
    const uuid = uuidv4();

    const url = document["new-ugly"].url.value;
    const title = document["new-ugly"].title.value;
    const description = document["new-ugly"].describetheugly.value;

    context.addUglyThing({
      url,
      description,
      title,
      uuid,
    });
  };

  render() {
    const RenderedPosts = this.context.uglyThings.map((item, index) => {
      let deleteCircle;
      if (!this.state.deleteActivated) deleteCircle = "";
      if (this.state.deleteActivated) deleteCircle = "delete-circle";

      return (
        <UglyThing
          key={index}
          item={item}
          deleteCircle={deleteCircle}
          removeUglyThing={this.context.removeUglyThing}
        />
      );
    });
    return (
      <div>
        <div className="page-background">
          <form
            name="new-ugly"
            onSubmit={(e) => {
              this.handleSubmit(e, this.context);
            }}
          >
            <input name="url" placeholder="Image Url" />
            <br />
            <input name="title" placeholder="Choose Title" />
            <br />

            <input type="submit" onClick={this.context.removeUglyThing} />
          </form>

          <div id="ugly-list">{RenderedPosts}</div>

          <select className="ui dropdown">
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>
      </div>
    );
  }
}

App.contextType = UglyThingsContext;

export default App;
