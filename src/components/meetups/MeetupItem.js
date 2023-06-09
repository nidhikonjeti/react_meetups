import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import Card from '../ui/Card';
import favoriteContext from '../../store/favorite-context';

function MeetupItem(props){
    const FavoriteCtx=useContext(favoriteContext);
    const itemIsfav=FavoriteCtx.itemFavorite(props.id)
    function toggleFavoriteStatusHandler(){
        if(itemIsfav){
            FavoriteCtx.removeFavorite(props.id);

        }
        else {
            FavoriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address,
            })
        }

    }
    return (<li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsfav?'Remove from favorites': 'add to favorites'}</button>
        </div>
        </Card>
    </li>
    );
}
export default MeetupItem;