import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/layout/meetups/MeetupList';

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No hay favoritos</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
