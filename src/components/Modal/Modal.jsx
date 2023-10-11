import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ReactComponent as Cross } from '../../assets/images/icons/cross.svg';
import { VectorIcon } from 'components/AdvertCard/AdvertCard.styled';
import noImage from '../../assets/images/noimage.png';
import {
  Backdrop,
  ModalCard,
  ImgContainer,
  CrossIcon,
  Title,
  Image,
  CarInfoWrap,
  Description,
  Subtitle,
  InfoItem,
  ConditionItem,
  ConditionWrap,
  RentalButton,
  Value,
} from './Modal.styled';

const Modal = ({ info, closeModal }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    type,
    mileage,
    functionalities,
    accessories,
    description,
    engineSize,
    fuelConsumption,
    rentalConditions,
  } = info;

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onError = e => (e.target.src = noImage);
  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalCard>
        <ImgContainer>
          <Image src={img ? img : noImage} alt={make} onError={onError} />
        </ImgContainer>
        <CrossIcon type="button" onClick={closeModal}>
          <Cross />
        </CrossIcon>

        <Title>
          {make} <span>{model}</span>, {year}
        </Title>

        <CarInfoWrap style={{ marginBottom: 4 }}>
          <li>{address.split(' ')[3].replace(',', '')}</li> <VectorIcon />
          <li>{address.split(' ')[4]}</li> <VectorIcon />
          <li>id: {id}</li> <VectorIcon />
          <li>Year: {year}</li> <VectorIcon />
          <li>Type: {type}</li>
        </CarInfoWrap>

        <CarInfoWrap style={{ marginBottom: 14 }}>
          <li>Fuel Consumption: {fuelConsumption}</li> <VectorIcon />
          <li>Engine Size: {engineSize}</li>
        </CarInfoWrap>

        <Description>{description}</Description>

        <Subtitle>Accessories and functionalities:</Subtitle>

        <CarInfoWrap style={{ marginBottom: 4 }}>
          {accessories.map(info => (
            <InfoItem key={nanoid()}>
              <p>{info}</p>
              <VectorIcon />
            </InfoItem>
          ))}
        </CarInfoWrap>

        <CarInfoWrap style={{ marginBottom: 24 }}>
          {functionalities.map(info => (
            <InfoItem key={nanoid()}>
              <p>{info}</p>
              <VectorIcon />
            </InfoItem>
          ))}
        </CarInfoWrap>

        <Subtitle>Rental Conditions: </Subtitle>

        <ConditionWrap style={{ marginBottom: 8 }}>
          <ConditionItem>
            Minimum age:{' '}
            <Value>{rentalConditions.split('\n')[0].split(' ')[2]}</Value>
          </ConditionItem>
          <ConditionItem>{rentalConditions.split('\n')[1]}</ConditionItem>
        </ConditionWrap>

        <ConditionWrap style={{ marginBottom: 24 }}>
          <ConditionItem style={{ flexGrow: 'grow' }}>
            {rentalConditions.split('\n')[2]}
          </ConditionItem>
          <ConditionItem>
            Mileage:{' '}
            <Value>
              {mileage.toString().legth < 3
                ? mileage
                : mileage.toString()[0] + ',' + mileage.toString().slice(1)}
            </Value>
          </ConditionItem>
          <ConditionItem>
            Price: <Value>{rentalPrice.slice(1)}$</Value>
          </ConditionItem>
        </ConditionWrap>

        <RentalButton href="tel:+380730000000">Rental car</RentalButton>
      </ModalCard>
    </Backdrop>
  );
};

export default Modal;
