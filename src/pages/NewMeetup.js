import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const history=useHistory();
function addMeetupHandler(meetupData){
    fetch(
        'https://react-start-11bdd-default-rtdb.firebaseio.com/meetups.json',
       {
        method:'POST',
        body:JSON.stringify(meetupData),
        headers:{
            'Content-Type': 'application/json'
        }      
       } ).then(()=>{
        history.replace('/')
       }) //javascript function allows to send http requests 
        //by default fetch sends get request
}
    return <section>
    <h1>add new meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupsPage;