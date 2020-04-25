import React, { useState } from "react";
import "./App.css";
import { UglyThingsContext } from "./UglyThingsContext";
import UglyThing from "./UglyThing";
import { v4 as uuidv4 } from "uuid";

export default function App(props) {
  const [itemsToDelete, setDeleteItems] = useState([]);

  const pushUUIDFunction = (uuid) => {
    if (!itemsToDelete.includes(uuid)) {
      setDeleteItems((prev) => {
        return Array.from(new Set([...prev, uuid]));
      });
    }
    if (itemsToDelete.includes(uuid)) {
      setDeleteItems((prev) => {
        return itemsToDelete.filter((i) => i !== uuid);
      });
    }


    console.log(itemsToDelete);
  };

  return (
    <UglyThingsContext.Consumer>
      {({ uglyThings, addUglyThing, removeUglyThings }) => {
        const RenderedPosts = uglyThings.map((item, index) => {
          return (
            <UglyThing
              key={index}
              item={item}
              pushUUIDFunction={pushUUIDFunction}
              itemsToDelete={itemsToDelete}
            />
          );
        });
        return (
          <div>
            <div className="page-background">
              <form
                name="new-ugly"
                onSubmit={(e) => {
                  e.preventDefault();
                  const uuid = uuidv4();

                  const url = document["new-ugly"].url.value;
                  const title = document["new-ugly"].title.value;
                  const description = document["new-ugly"].description.value;

                  addUglyThing({
                    url,
                    title, uuid
                    description,
                    uuid,
                  });
                }}
              >
                <input name="url" placeholder="Image Url" />
                <br />
                <input name="title" placeholder="Choose Title" />
                <br />
                <input
                  name="description"
                  placeholder="Describe why you think it's ugly"
                />
                <br />
                <input type="submit" />
              </form>

              <div id="ugly-list">{RenderedPosts}</div>

              <select className="ui dropdown">
                <option value="">Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => {
                  removeUglyThings(itemsToDelete);
                }}
              >
                Delete Ugly Things
              </button>
            </div>
          </div>
        );
      }}
    </UglyThingsContext.Consumer>
  );
}
