import React, { useState } from "react";
import "./App.css";
import { UglyThingsContext } from "./UglyThingsContext";
import UglyThing from "./UglyThing";
import { v4 as uuidv4 } from "uuid";

export default function App(props) {
  const [itemsToDelete, setDeleteItems] = useState([]);

  const increment = (uuid) => {
    setDeleteItems((prev) => {
      return Array.from(new Set([...prev, uuid]));
    });
  };

  const deleteAllItems = () => {};

  return (
    <UglyThingsContext.Consumer>
      {({ uglyThings, addUglyThing }) => {
        console.log(uglyThings);
        const RenderedPosts = uglyThings.map((item, index) => {
          return <UglyThing key={index} item={item} increment={increment} />;
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
                    title,
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
          </div>
        );
      }}
    </UglyThingsContext.Consumer>
  );
}

// class App extends React.Component {
//   state = {
//     RenderedPosts: [],
//     deleteActivated: false,
//     itemsToDelete: [],
//   };

//   render() {
//     const RenderedPosts = this.context.uglyThings.map((item, index) => {
//       let deleteCircle;
//       if (!this.state.deleteActivated) deleteCircle = "";
//       if (this.state.deleteActivated) deleteCircle = "delete-circle";

//       return (
//         <UglyThing
//           key={index}
//           item={item}
//           deleteCircle={deleteCircle}
//           removeUglyThing={this.context.removeUglyThing}
//         />
//       );
//     });
//     return (
//       <div>
//         <div className="page-background">
//           <form
//             name="new-ugly"
//             onSubmit={(e) => {
//               this.handleSubmit(e, this.context);
//             }}
//           >
//             <input name="url" placeholder="Image Url" />
//             <br />
//             <input name="title" placeholder="Choose Title" />
//             <br />
//             <input
//               name="description"
//               placeholder="Describe why you think it's ugly"
//             />
//             <br />
//             <input type="submit" onClick={this.context.removeUglyThing} />
//           </form>

//           <div id="ugly-list">{RenderedPosts}</div>

//           <select className="ui dropdown">
//             <option value="">Gender</option>
//             <option value="1">Male</option>
//             <option value="0">Female</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// App.contextType = UglyThingsContext;

// export default App;
