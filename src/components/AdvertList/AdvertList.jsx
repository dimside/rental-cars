import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getAdvertsThunk } from 'redux/operations';
import { selectAdverts, selectFilter, selectIsLoading } from 'redux/selector';

import Spinner from 'components/Spinner';
import AdvertCard from 'components/AdvertCard';
import { Button, Container, List } from './AdvertList.styled';

const AdvertList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsThunk(page));
  }, [dispatch, page]);

  const handlePage = () => {
    setPage(prev => prev + 1);
  };

  const filter = useSelector(selectFilter);
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  const filteredAdverts = adverts.filter(({ make, rentalPrice, mileage }) => {
    if (
      (filter.make === '' || make === filter.make) &&
      (filter.rentalPrice === '' ||
        Number(rentalPrice.slice(1)) <= filter.rentalPrice) &&
      (filter.from === '' || mileage >= filter.from) &&
      (filter.to === '' || mileage <= filter.to)
    ) {
      return true;
    }
    return false;
  });

  const arrForRender = filteredAdverts.length !== 0 ? filteredAdverts : adverts;

  useEffect(() => {
    const height = 426;
    if (adverts.length > 8) {
      window.scrollBy({
        top: height * 1.5,
        behavior: 'smooth',
      });
    }
  }, [adverts]);

  return (
    <Container>
      <List>
        {arrForRender.map(item => (
          <AdvertCard key={item.id} info={item} />
        ))}
      </List>
      {adverts.length < 34 && (
        <Button type="button" onClick={handlePage}>
          Load more
        </Button>
      )}
      {isLoading && <Spinner />}
    </Container>
  );
};

export default AdvertList;
