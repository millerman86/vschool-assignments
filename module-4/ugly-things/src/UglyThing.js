import React from "react";

export default function UglyThing(props) {
  return (
    <div key={props.item["uuid"]}>
      <div>{props.item["title"]}</div>
      <div>{props.item["description"]}</div>

      <div className="image-wrapper">
        <img src={props.item.url} alt="" className="ugly-thing-image" />

        <div
          className="delete-box-container"
          style={{
            border: props.itemsToDelete.includes(props.item.uuid)
              ? "1px solid white"
              : "1px solid white",
          }}
          onClick={() => {
            props.pushUUIDFunction(props.item.uuid);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            style={{
              display: props.itemsToDelete.includes(props.item.uuid)
                ? "block"
                : "block",
            }}
          >
            <g>
              <circle
                r="12"
                cx="50%"
                cy="50%"
                class="circle-back"
                preserveAspectRatio="xMinYMin meet"
              />
            </g>
            <path
              color="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            ></path>
          </svg>
        </div>

        <input name="describetheugly" placeholder="Why is it ugly?" />
        <br />
        <input name="name-change" placeholder="Change my name!" />
      </div>
    </div>
  );
}
