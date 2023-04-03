import { Context, createContext,useState } from "react";
 const FavotiteContext=createContext(   //js obect 
    {
        favorites:[],
        totalFavorites:0,
        addFavorite:(favoriteMeetup)=>{},
        removeFavorite:(meetupId)=>{},
        itemFavorite:(meetupId)=>{}
    }
 );
  export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup)

        });
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=>meetup.id !== meetupId);
        })
    }
    function itemFavoriteHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id === meetupId);
    }
    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemFavorite:itemFavoriteHandler
    };
     return <FavoritesContext.Provider value={context}>
        {props.children}
     </FavoritesContext.Provider>
 } 
 export default favorite-context;