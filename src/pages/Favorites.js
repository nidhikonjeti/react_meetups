import {useContext} from react;
import favoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";
function Favorites(){
const favoriteCtx=useContext(favoriteContext);
let content;
if(favoriteCtx.totalFavorites===0){
    content=<p>no favs</p> 
}
else{
  content=  <MeetupList meetups={favoriteCtx.Favorites}/>

}
    return (<section>
        <h1>my favss</h1>
        {content}

    </section>
    );
}

export default Favorites;