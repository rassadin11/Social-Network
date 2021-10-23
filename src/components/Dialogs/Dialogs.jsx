import React from "react"
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

  const dialogs = [
    {id: 1, last_message: 'WOWWW!!!', name: 'Artyom'},
    {id: 2, last_message: 'hahahhaha', name: 'Arina'},
    {id: 3, last_message: 'It\'s so funny =)', name: 'Levon'},
  ]

  return (
    <div>
      {dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} last_message={dialog.last_message} id={dialog.id}/>)}
    </div>
  )
};

export default Dialogs;