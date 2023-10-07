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

const AdvertCard = () => {
  return (
    <AdvertItem>
      <ImageContainer>
        <Image
          src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg"
          alt="car"
        />
        <HeartIcon/>
      </ImageContainer>
      <CarInfoCantainer>
        <Title>
          Buick <Model>Enclave</Model>, 2008
        </Title>
        <p>$40</p>
      </CarInfoCantainer>

      <AdvertInfoContainer>
        <li>Kiev</li> <VectorIcon />
        <li>Ukraine</li> <VectorIcon />
        <li>Luxury Car Rentals</li>
      </AdvertInfoContainer>
      <AdvertInfoContainer style={{ marginBottom: 28 }}>
        <li>Suv</li> <VectorIcon />
        <li>9582</li> <VectorIcon />
        <li>Power liftgate</li>
      </AdvertInfoContainer>
      <Button type="button">Learn more</Button>
    </AdvertItem>
  );
};
export default AdvertCard;
