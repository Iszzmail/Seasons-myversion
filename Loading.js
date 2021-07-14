import React from "react";
import "semantic-ui-css/semantic.min.css";

const Loading = (props) => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui loader">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
