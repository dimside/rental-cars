import {
  AdvertItem,
  BrandName,
  ImageContainer,
  InfoContainer,
} from './AdvertCard.styled';

import { ReactComponent as Vector } from '../../assets/images/icons/vector.svg';

const AdvertCard = () => {
  return (
    <AdvertItem>
      <ImageContainer>
        <img
          src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg"
          alt="car"
        />
      </ImageContainer>
      <BrandName>
        Buick <span>Enclave</span>, 2008
      </BrandName>
      <p>$40</p>
      <InfoContainer>
        <p>Kiev</p> <Vector />
        <p>Ukraine</p> <Vector />
        <p>Luxury Car Rentals</p> <Vector />
        <p>Premium</p> <Vector />
        <p>Suv</p> <Vector />
        <p>Enclave</p> <Vector />
        <p>9582</p> <Vector />
        <p>Power liftgate</p> <Vector />
      </InfoContainer>
      <button type="button">Learn more</button>
    </AdvertItem>
  );
};
export default AdvertCard;
