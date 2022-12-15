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
  GroupInput,
  Heading,
  Logo,
  NewUser,
  Page,
  FormContainer,
  CheckBox,
  Signup,
  Section,
} from "../../features/style/login_singup";

const LoginPage = () => {
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
        email: "",
        password: "",
        check_box: true,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Nieprawidłowy adres e-mail")
          .required("Proszę wprowadzić e-mail"),
        password: Yup.string()
          .required("Proszę wprowadzić hasło")
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
            <Heading>Logowanje</Heading>
            <NewUser>
              <Description>Nowy urzytkownik?</Description>
              <Signup>
                <Link to="/signup">Utwurz kąto</Link>
              </Signup>
            </NewUser>
            <FormContainer>
              <Form>
                <GroupInput>
                  <Field name="email" type="email" placeholder="Adres e-mail" />
                  <small>
                    <ErrorMessage name="email" />
                  </small>
                </GroupInput>

                <GroupInput>
                  <Field name="password" type="password" placeholder="Chasło" />
                  <small>
                    <ErrorMessage name="password" />
                  </small>
                </GroupInput>

                <CheckBox>
                  <label>
                    <Field name="check_box" type="checkbox" />
                    <span>&#10003;</span>
                  </label>
                  <span>Pozostań zalogowanym</span>
                </CheckBox>

                <ButtonStyle type="submit">Zaloguj</ButtonStyle>
              </Form>
            </FormContainer>
          </ContainerForm>

          <ContainerImg>
            <Logo src="images/logo-cut.png" alt="logo" />
          </ContainerImg>
        </Section>
      </Page>
    </Formik>
  );
};

export default LoginPage;
