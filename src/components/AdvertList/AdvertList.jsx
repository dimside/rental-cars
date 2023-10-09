import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAdvertsThunk } from 'redux/operations';
import { selectAdverts, selectIsLoading } from 'redux/selector';

import AdvertCard from 'components/AdvertCard';
import { Button, Container, List } from './AdvertList.styled';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'components/Spinner';

const AdvertList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  let pageNumber = searchParams.get('p') ?? 1;

  useEffect(() => {
    dispatch(getAdvertsThunk(pageNumber));
  }, [dispatch, pageNumber]);

  const handlePage = () => {
    setSearchParams({ p: Number(pageNumber) + 1 });
  };

  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <List>
        {adverts.map(item => (
          <AdvertCard key={item.id} info={item} />
        ))}
      </List>
      {adverts.length === 8 && (
        <Button type="button" onClick={handlePage}>
          Load more
        </Button>
      )}
      {isLoading && <Spinner/>}
    </Container>
  );
};

export default AdvertList;
