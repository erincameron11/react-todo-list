'use client'
import React, { useState } from 'react'

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("");

    // Function to handle entering text into input field
    const handleTextEntered = e => {
        setValue(e.target.value); // Set the value
    }

    // Function to handle submitting the form
    const handleSubmit = e => {
        e.preventDefault(); // to prevent the page from reloading on submit

        // Add the todo to the list of todos
        addToDo(value);

        // Clear the form
        setValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="enter task here" onChange={handleTextEntered} value={value}/>
            <button type="submit">Add Task</button>
        </form>
    );
}


// class ToDoForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           message: 'hello'    
//         };
//     }

//     render() {
//         return <div>{this.state.message}</div>;
//     }
// }



// class ToDoForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return(
//             <form>
//                 <input placeholder="enter text here" />
//             </form>
//         );
//     }
// }


// Style from youtube
// export const ToDoForm = () => {
//     return(
//         <form>
//             <textfield placeholder="enter text here"></textfield>
//         </form>
//     );  
// }