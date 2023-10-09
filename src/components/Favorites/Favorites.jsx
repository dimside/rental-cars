import { useSelector } from 'react-redux';

import { selectFavorites } from 'redux/selector';

import AdvertCard from 'components/AdvertCard';
import { Container, List } from './Favorites.styled';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <List>
        {favorites.map(item => (
          <AdvertCard key={item.id} info={item} />
        ))}
      </List>
    </Container>
  );
};

export default FavoritesList;
