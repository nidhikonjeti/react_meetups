import MeetupList from "../components/meetups/MeetupList";
import { useState,useEffect } from "react";



  
  function AllMeetupsPage() {
    const [isLoading,setIsLoading]=useState(true);
    const [loadedMeetups,setLoadedMeetups]=useState([]);
    useEffect(()=>{
      setIsLoading(true);
      fetch('https://react-start-11bdd-default-rtdb.firebaseio.com/meetups.json',
    ).then(response=>{
     return response.json();
    }).then(data=>{
      const meetups=[];
      for (const key in data){
        const meetup={        //the data is present as object in firebase to convert it v need to convert it to array
        id:key,
        ...data[key]
        };
        meetups.push(meetup);
      };
      setIsLoading(false);
      setLoadedMeetups(meetups);

    })},[]);   //useeffect controls react from sending infinite requests.depending on the dependencies the fetch is run
//when there are no dependencies the function will run only once because from next time dependencies are same.novalues
  //if the value of dependencies doesnot change then function only run once 
    if(isLoading){
      return <section><p>loading....</p></section>
    }
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
      </section>
    );
  }
  
  export default AllMeetupsPage;