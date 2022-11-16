import React, { useState, useRef } from "react";

import classes from './AddVacancy.module.css';
import Modal from "../../UI/Modal";

const isEmpty = (value) => value.trim() === "";

const AddVacancy = props => {
    const [submittingState, setSubmittingState] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const [formValidity, setFormValidity] = useState({
        name: true,
        description: true,
        tel: true,
        salary: true
        });

    const nameInput = useRef();
    const descriptionInput = useRef();
    const telInput = useRef();
    const salaryInput = useRef();
    const remoteInput = useRef();

    const addVacancyHandler = event => {
        event.preventDefault()

        const enteredName = nameInput.current.value;
        const enteredDescription = descriptionInput.current.value;
        const enteredTel = telInput.current.value;
        const enteredSalary = salaryInput.current.value;
        const enteredRemote = remoteInput.current.checked;

        const nameValid = !isEmpty(enteredName);
        const descValid= !isEmpty(enteredDescription);
        const telValid = !isEmpty(enteredTel);
        const salaryValid = !isEmpty(enteredSalary);

        setFormValidity({
            name: nameValid,
            description: descValid,
            tel: telValid,
            salary: salaryValid
        })

        const formIsValid = nameValid && 
        descValid &&
        telValid &&
        salaryValid;

        const vakancData = {
            name: enteredName, 
            description: enteredDescription,
            tel: enteredTel,
            salary: enteredSalary,
            remote: enteredRemote,
        }

        const sendDataToBack = async () => {
            setSubmittingState(true)
            await fetch("https://vakancies-fb3f2-default-rtdb.firebaseio.com/vacancies.json", {
                method: 'POST',
                body: JSON.stringify(vakancData)
            });
            setSubmittingState(false);
            setDidSubmit(true)
        }

        if(!formIsValid) {
            return
        }

        sendDataToBack()
    }

    const submittingContent = <p>Sending data...</p>;

    const didSubmitContent = (
      <React.Fragment>
        <p>Succesfully sent the data. Renew this page for see your vacancy.</p>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </React.Fragment>
    );

    const initialContent = (
      <form className={classes.addForm} onSubmit={addVacancyHandler}>
        <label htmlFor="name">Job title</label>
        <input
          id="name"
          type="text"
          ref={nameInput}
          className={formValidity.name ? "" : classes.invalid}
        ></input>
        {!formValidity.name && <p>Enter valid title</p>}
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          ref={descriptionInput}
          className={formValidity.description ? "" : classes.invalid}
        ></textarea>
        {!formValidity.description && <p>Enter valid description</p>}
        <label htmlFor="tel"> Telephone: </label>
        <input
          type="number"
          min="0"
          id="tel"
          ref={telInput}
          className={formValidity.tel ? "" : classes.invalid}
        ></input>
        {!formValidity.tel && <p>Enter valid telephone number</p>}
        <label htmlFor="salary"> Salary p/week: </label>
        <input
          type="number"
          min="0"
          id="salary"
          ref={salaryInput}
          className={formValidity.salary ? "" : classes.invalid}
        ></input>
        {!formValidity.salary && <p>Enter valid salary</p>}
        <label htmlFor="remote"> Remote: </label>
        <input
          type="checkbox"
          id="remote"
          className={classes.check}
          ref={remoteInput}
        ></input>

        <div>
          <button onClick={props.onClose}>Close</button>
          <button type="submit">Send</button>
        </div>
      </form>
    );

    return (
      <Modal onClose={props.onClose}>
        {!didSubmit && !submittingState && initialContent}
        {submittingState && submittingContent}
        {!submittingState && didSubmit && didSubmitContent}
      </Modal>
    );
}

export default AddVacancy;