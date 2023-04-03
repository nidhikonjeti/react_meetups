import MeetupItem from './MeetupItem';
import classes from './MeetupList'


function MeetupList(props){
return <ul className={classes.list}>
    {props.meetups.map(meetup=><MeetupItem key={meetup.id} 
    image={meetup.image}
    id={meetup.id}
    title={meetup.title}
    address={meetup.address}
    description={meetup.description}
    />
    )}
</ul>
}

export default MeetupList;