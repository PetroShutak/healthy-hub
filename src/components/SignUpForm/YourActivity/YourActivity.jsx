import { Formik, Form, Field } from 'formik';
import lowQualityImage from '../../../assets/images/workout-fashion.png';
import highQualityImage from '../../../assets/images/workout-fashion-2x.png';

import {
  YourActivityContainer,
  YourActivityHeader,
  Image,
  Text,
  LabelBlock,
  Label,
  InputButton,
  BackButton,
  CustomRadioInput,
} from './YourActivity.styled';
import { useEffect } from 'react';

const initialValues = {
  activity: '',
};

const YourActivity = ({ goNext, goBack, dataActivity, setActivity }) => {
  useEffect(() => {
    const selectorString = 'input[type="radio"][value="' + dataActivity + '"]';
    const checkedButton = document.querySelector(selectorString);
    if (!checkedButton) {
      return;
    }
    checkedButton.checked = true;
  }, []);

  const handleSubmit = async ({ activity }) => {
    setActivity(activity);
    goNext();
  };
  const handleBack = () => {
    const checkedButton = document.querySelector(
      'input[name="activity"]:checked'
    );
    if (!checkedButton) {
      return;
    }
    setActivity(checkedButton.value);
    goBack();
  };

  const isRetinaDisplay =
    window.matchMedia &&
    window.matchMedia(
      '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
    ).matches;

  const image = isRetinaDisplay ? highQualityImage : lowQualityImage;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <YourActivityContainer>
        <Image src={image} alt="Illustration Activity" />
        <Form>
          <YourActivityHeader id="yourActivityGroup">
            Your Activity
          </YourActivityHeader>
          <Text>
            To correctly calculate calorie <br />
            and water intake
          </Text>
          <LabelBlock role="group" aria-labelledby="yourActivityGroup">
            <Label>
              <Field
                type="radio"
                name="activity"
                value="1.2"
                as={CustomRadioInput}
                required
                checked
              />
              1.2 - if you do not have physical activity and sedentary work
            </Label>
            <Label>
              <Field
                type="radio"
                name="activity"
                value="1.375"
                as={CustomRadioInput}
                required
              />
              1,375 - if you do short runs or light gymnastics 1-3 times a week
            </Label>
            <Label>
              <Field
                type="radio"
                name="activity"
                value="1.55"
                as={CustomRadioInput}
                required
              />
              1.55 - if you play sports with average loads 3-5 times a week
            </Label>
            <Label>
              <Field
                type="radio"
                name="activity"
                value="1.725"
                as={CustomRadioInput}
                required
              />
              1.725 ​​- if you train fully 6-7 times a week
            </Label>
            <Label>
              <Field
                type="radio"
                name="activity"
                value="1.9"
                as={CustomRadioInput}
                required
              />
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </Label>
          </LabelBlock>
          <InputButton type="submit">Next</InputButton>
          <BackButton type="button" onClick={handleBack}>
            Back
          </BackButton>
        </Form>
      </YourActivityContainer>
    </Formik>
  );
};

export default YourActivity;
