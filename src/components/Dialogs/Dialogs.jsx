import React from "react"
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
  return (
    <div>
      {props.message.map(d => <Dialog key={d.id} name={d.name} last_message={d.last_message} id={d.id}/>)}
    </div>
  )
};

export default Dialogs;