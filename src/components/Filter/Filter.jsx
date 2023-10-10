import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import brands from 'data/brands.json';
import {
  BrandInput,
  Button,
  Container,
  FilterWrap,
  FromInput,
  Label,
  Placeholder,
  ToInput,
} from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/advertsSlice';

const prices = [];
for (let i = 10; i <= 250; i += 10) {
  prices.push(i);
}

const validationSchema = Yup.object().shape({
  make: Yup.string(),
  rentalPrice: Yup.string(),
  from: Yup.string(),
  to: Yup.string(),

  atLeastOneField: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one field is required.'),
});

const Filter = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(changeFilter(values));
    resetForm();
  };

  return (
    <Container className="container">
      <FilterWrap>
        <Formik
          initialValues={{ make: '', rentalPrice: '', from: '', to: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form style={{ display: 'flex' }}>
              <Label htmlFor="make">
                Car brand
                <Field as={BrandInput} id="make" name="make">
                  {brands.map(brand => (
                    <option key={nanoid()} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </Label>

              <Label htmlFor="rentalPrice">
                Price/ 1 hour
                <Field
                  style={{ width: 125 }}
                  as={BrandInput}
                  id="rentalPrice"
                  name="rentalPrice"
                >
                  {prices.map(brand => (
                    <option key={nanoid()} value={brand}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </Label>

              <Label htmlFor="from">
                Car mileage / km
                <Placeholder>From</Placeholder>
                <Field
                  as={FromInput}
                  type="number"
                  min={0}
                  name="from"
                  id="from"
                />
              </Label>
              <Label htmlFor="to" style={{ color: 'transparent' }}>
                .<Placeholder>To</Placeholder>
                <Field as={ToInput} type="number" min={0} name="to" id="to" />
              </Label>

              <ErrorMessage name="atLeastOneField" component="div" />

              <Button type="submit">Search</Button>
            </Form>
          )}
        </Formik>
      </FilterWrap>
    </Container>
  );
};

export default Filter;
