import {useRef} from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';


function NewMeetupForm(props){
    const titleInputRef=useRef(); //to look for the keystrokes of the input submitted
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descritionInputRef=useRef();
    function submitHandler(event){    //reading the input given is by useref
     event.preventDefault(); //to prevent browser from opening for the sumit
     const enteredTitle=titleInputRef.current.value; 
     const enteredImage=imageInputRef.current.value;
     const eneteredAddress=addressInputRef.current.value;
     const eneteredDescription=descritionInputRef.current.value;
     const meetupData={
        title:enteredTitle,
        Image:enteredImage,
        address:eneteredAddress,
        description:eneteredDescription,//stores the current inputted element
     };

    

    props.onAddMeetup(meetupData);//now v have to send this data to server 
    //in react v dont connect directly connect to the database because of some security reasons instead v use backend api to send requests to the server through backend api
    //here v use firebase the dummy backend .it contains database n api which will send request
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id="address" ref={addressInputRef}></input>
            </div>

            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id="description" required rows="5" ref={descritionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                
                <button>Add meetup</button>
            </div>
        </form>
    </Card>

}
export default NewMeetupForm;