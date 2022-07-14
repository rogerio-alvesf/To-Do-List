import React, { useRef } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import useStyles from "./styles";
import { Usuario } from "../../Types";
import validationSchema from "./validate";
import { useNavigate } from "react-router-dom";

const initialValues = {
  nome: "João",
  email: "joão@gmail.com",
  senha: "s&Nh@321",
};

const Cadastro = () => {
  const styles = useStyles();

  const navigate = useNavigate();

  const formikRef = useRef<FormikProps<Usuario>>(null);

  const handleConfirmarCadastro = (values: Usuario) => {

    if (values === initialValues){
      window.alert("Não é possivel cadastrar os dados iniciais.\nDigite dados validos.")
    }
    else {
      window.alert(values.nome + " foi cadastrado com sucesso.");
      navigate('/login');
    }
  };



  return (
    <Formik<Usuario>
      onSubmit={handleConfirmarCadastro}
      initialValues={initialValues}
      innerRef={formikRef}
      validateOnChange
      validateOnBlur
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({
        handleSubmit: handleFormikSubmit,
        getFieldProps,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleFormikSubmit}>
          <Stack spacing={4} sx={styles.root}>
            <Box sx={styles.containerFormulario}>
              <Typography variant="h4">Cadastro</Typography>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    label="Nome"
                    {...getFieldProps("nome")}
                    fullWidth
                    error={!!errors.nome && !!touched.nome}
                    helperText={errors.nome}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Email"
                    {...getFieldProps("email")}
                    fullWidth
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Senha"
                    {...getFieldProps("senha")}
                    fullWidth
                    type="password"
                  />
                </Grid>
                <Grid item md={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    confirmar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default Cadastro;
