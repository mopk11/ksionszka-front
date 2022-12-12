//import React, { useRef, useState, useEffect } from "react";
import { getToken } from "../../service/user";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";
import {
  ButtonStyle,
  ContainerForm,
  ContainerImg,
  Description,
  FlexTwo,
  GroupInput,
  Heading,
  Login,
  Logo,
  NewUser,
  Page,
  FormContainer,
  Section,
} from "../../features/style/login_singup";

const SignUp = () => {
  const onSubmit = (form) => {
    getToken({
      username: form.values.username,
      password: form.values.password,
    }).then((token) => localStorage.setItem("token", token));
  };

  // formik i yup
  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Nieprawidłowy adres e-mail")
          .required("Proszę wprowadzić e-mail"),
        password: Yup.string()
          .min(6, "Hasło musi składać się z co najmniej 6 znaków")
          .required("Proszę wprowadzić hasło")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            "Niepoprawne hasło"
          ),
        fname: Yup.string().required("Proszę wpisać swoje imię"),
        lname: Yup.string().required("Proszę wpisać swoje nazwisko"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Page>
        <Section>
          <ContainerForm>
            <Heading>Stwórz kąto</Heading>
            <NewUser>
              <Description>Masz już kąto?</Description>
              <Login>
                <Link to="/login">Zaloguj się!</Link>
              </Login>
            </NewUser>
            <FormContainer>
              <Form>
                <FlexTwo>
                  <GroupInput>
                    <Field name="fname" type="text" placeholder="Imię" />
                    <small>
                      <ErrorMessage name="fname" />
                    </small>
                  </GroupInput>
                  <GroupInput>
                    <Field name="lname" type="text" placeholder="Nazwisko" />
                    <small>
                      <ErrorMessage name="lname" />
                    </small>
                  </GroupInput>
                </FlexTwo>

                <GroupInput>
                  <Field name="email" type="email" placeholder="Adres e-mail" />
                  <small>
                    <ErrorMessage name="email" />
                  </small>
                </GroupInput>

                <GroupInput>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Chasło"
                  />
                  <small>
                    <ErrorMessage name="password" />
                  </small>
                </GroupInput>

                <ButtonStyle type="submit">Zarejestrój się</ButtonStyle>
              </Form>
            </FormContainer>
          </ContainerForm>

          <ContainerImg>
            <Logo src="/images/logo-cut.png" />
          </ContainerImg>
        </Section>
      </Page>
    </Formik>
  );
};

export default SignUp;
