import Head from "next/head";
import { Manrope } from "next/font/google";
import {
  Alert,
  Button,
  IconButton,
  CheckboxGroup,
  Chip,
  Label,
  Tag,
  Form,
  RadioGroup,
  NumberInput,
  TextInput,
  MultipleInputInlineWrapper,
  Counter,
  Switch,
} from "../DesignSystem";
import { Check, ShoppingCartSimple } from "@phosphor-icons/react";
import { useFormik, FormikProvider } from "formik";
import { useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  const [alert1Visible, setAlert1Visible] = useState(true);
  const [alert2Visible, setAlert2Visible] = useState(true);
  const [alert3Visible, setAlert3Visible] = useState(true);
  const [switchOn, setSwitchOn] = useState(false);

  const formik = useFormik({
    initialValues: { pick: "", firstName: "", lastName: "", petNum: 0, adults: 0, pets: [] },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Head>
        <title>Shine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${manrope.className}`}>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button severity="primary">primary</Button>
          <Button severity="secondary">secondary</Button>
          <Button severity="tertiary">tertiary</Button>
          <Button severity="danger">danger</Button>
          <IconButton outlined>
            <ShoppingCartSimple />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <Tag type="success">32</Tag>
          <Tag type="info">32</Tag>
          <Tag type="danger">32</Tag>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <Chip type="primary" onClick={() => {}}>
            <Check /> Figma
          </Chip>
          <Chip type="secondary">Wireframes</Chip>
          <Chip type="primary">
            <Check /> Verified Purchase
          </Chip>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <Label type="success">Good</Label>
          <Label type="warning">Fair</Label>
          <Label type="danger">Bad</Label>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
            maxWidth: "500px",
            flexWrap: "wrap",
          }}
        >
          {alert1Visible && (
            <Alert onDismiss={() => setAlert1Visible(false)} onUndo={() => {}} type="success">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Alert>
          )}
          {alert2Visible && (
            <Alert onDismiss={() => setAlert2Visible(false)} type="danger">
              Bad
            </Alert>
          )}
          {alert3Visible && (
            <Alert onDismiss={() => setAlert3Visible(false)} type="warning">
              Warning
            </Alert>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "8px",
            width: "500px",
            padding: "24px",
          }}
        >
          <FormikProvider value={formik}>
            <Form>
              <RadioGroup label="Pick a Pet" name="pick" options={["cat", "dog", "bird"]} />
              <MultipleInputInlineWrapper>
                <TextInput name="firstName" type="text">
                  First Name
                </TextInput>
                <TextInput name="lastName" type="text">
                  Last Name
                </TextInput>
              </MultipleInputInlineWrapper>
              <NumberInput name="petNum" type="text">
                Number of Pets
              </NumberInput>
              <Counter name="adults" max={10}>
                Adults
              </Counter>
              <CheckboxGroup
                label="Choose all that apply"
                name="pets"
                options={[
                  { id: 0, label: "Cat", checked: false, subText: "furry companion" },
                  { id: 1, label: "Dog", checked: false, subText: "sack of flour" },
                  { id: 2, label: "Bird", checked: false, subText: "sad and flightless" },
                ]}
              />
              <Switch onClick={() => setSwitchOn(!switchOn)} on={switchOn} />
              <Button severity="primary" type="submit">
                Submit
              </Button>
            </Form>
          </FormikProvider>
        </div>
      </main>
    </>
  );
}
