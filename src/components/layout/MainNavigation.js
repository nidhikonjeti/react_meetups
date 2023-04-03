import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import favoriteContext from '../../store/favorite-context';
import { useContext } from 'react';
function MainNavigation(){
    const favoriteCtx=useContext(favoriteContext);
    return (
    <header className={classes.header}>
        <div className={classes.logo}>react meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All meetups</Link></li>
                <li><Link to='/new-meetup'>Add new meetup</Link></li>
                <li><Link to='/favorites'>My favorites<span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
    );
}
export default MainNavigation;