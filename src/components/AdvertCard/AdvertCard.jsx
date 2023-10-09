import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  AdvertInfoContainer,
  AdvertItem,
  Title,
  CarInfoCantainer,
  Image,
  ImageContainer,
  Model,
  VectorIcon,
  Button,
  HeartIcon,
} from './AdvertCard.styled';

import noImage from '../../assets/images/noimage.png';
import { addFavorite, delFavorite } from 'redux/advertsSlice';
import { selectFavorites } from 'redux/selector';
import Modal from 'components/Modal';

const portal = document.querySelector('#modal');

const AdvertCard = ({ info }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = info;

  const [isFavorite, setIsFavorite] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isInclude = favorites.find(item => id === item.id);
  useEffect(() => {
    if (isInclude) {
      setIsFavorite(true);
    }
  }, [isInclude]);

  const handleFavorite = () => {
    setIsFavorite(p => !p);
    isFavorite ? dispatch(delFavorite(id)) : dispatch(addFavorite(info));
  };

  const handleModal = () => {
    setToggleModal(p => !p);
  };

  if (toggleModal) {
    document.body.classList.add('modalIsOpen');
  } else {
    document.body.classList.remove('modalIsOpen');
  }

  const onError = e => (e.target.src = noImage);

  return (
    <AdvertItem>
      <ImageContainer>
        <Image
          src={img ? img : noImage}
          alt={make}
          onError={onError}
          fitType={img ? 'cover' : 'contain'}
        />
        <button type="button" onClick={handleFavorite}>
          <HeartIcon
            fill={isFavorite ? 'var(--heart-active)' : 'none'}
            stroke={isFavorite ? 'var(--heart-active)' : 'var(--heart-stroke)'}
          />
        </button>
      </ImageContainer>
      <CarInfoCantainer>
        <Title>
          {make} <Model>{model}</Model>, {year}
        </Title>
        <p>{rentalPrice}</p>
      </CarInfoCantainer>
      <AdvertInfoContainer>
        <li>{address.split(' ')[3].replace(',', '')}</li> <VectorIcon />
        <li>{address.split(' ')[4]}</li> <VectorIcon />
        <li>{rentalCompany}</li>
      </AdvertInfoContainer>
      <AdvertInfoContainer style={{ marginBottom: 28 }}>
        <li>{type}</li> <VectorIcon />
        <li>{mileage}</li> <VectorIcon />
        <li>{functionalities[0]}</li>
      </AdvertInfoContainer>
      <Button type="button" onClick={handleModal}>
        Learn more
      </Button>
      {toggleModal &&
        createPortal(<Modal info={info} closeModal={handleModal} />, portal)}
    </AdvertItem>
  );
};
export default AdvertCard;
