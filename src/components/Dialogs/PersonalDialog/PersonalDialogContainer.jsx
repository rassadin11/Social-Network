import PersonalDialog from './PersonalDialog';
import { AddMessageToDialog } from "../../../redux/redux-store";
import { connect } from "react-redux";

let mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogs,
        match: +props.match
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (event, text, id) => {
            if (!text.length) {
                event.preventDefault()
                return
            };
            
            dispatch(AddMessageToDialog(text, id))
            event.target.focus()
        },
        
        addNewMsg: (text, id) => {
            if (text.length) {
                dispatch(AddMessageToDialog(text, id))
            }
        }
    }
}

const PersonalDialogContainer = connect(mapStateToProps, mapDispatchToProps)(PersonalDialog)

export default PersonalDialogContainer;