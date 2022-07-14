import React, { useRef, useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Item } from "../../../Types";
import useStyles from "./styles";
import validationSchema from "./validate";

type NovoItemProps = {
  handleClose: () => void;
  handleArmazenarItem: (itemSalvo: Item) => Item;
}

const initialValues: Item = {
  titulo: "Arrumar a casa",
  descricao: "Passar a vassoura em todos os comodos",
  prioridade: "Nenhuma",
};

const prioridadeValues = [
  {
    value: "B",
    label: "Baixa",
  },
  {
    value: "M",
    label: "Média",
  },
  {
    value: "A",
    label: "Alta",
  },
];

const NovoItem = ({ handleClose, handleArmazenarItem }: NovoItemProps) => {
  const styles = useStyles();

  const formikRef = useRef<FormikProps<Item>>(null);
  const [prioridade, setPrioridade] = useState("");

  const handleSalvarItem = (values: Item) => {
    handleArmazenarItem(values);
    handleClose();
  };

  const changePrioridade = (event: string) => {
    setPrioridade(event);
  };

  return (
    <Card sx={styles.root}>
      <Stack spacing={2}>
        <Typography variant="h5">Adicionar Item</Typography>
        <Formik<Item>
          onSubmit={handleSalvarItem}
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
            errors,
            touched,
          }) => (
            <form onSubmit={handleFormikSubmit}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    label="Titulo"
                    {...getFieldProps("titulo")}
                    fullWidth
                    error={!!errors.titulo && !!touched.titulo}
                    helperText={errors.titulo}
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Descrição"
                    {...getFieldProps("descricao")}
                    fullWidth
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    label="Nivel de prioridade"
                    {...getFieldProps("prioridade")}
                    fullWidth
                    select
                    value={prioridade}
                  >
                    {prioridadeValues.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => changePrioridade(option.value)}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={9.5} sx={styles.containerButtons}>
                  <Button variant="contained" type="submit">
                    confirmar
                  </Button>
                </Grid>
                <Grid item md={2.5}>
                  <Button onClick={() => handleClose()}>cancelar</Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Stack>
    </Card>
  );
};

export default NovoItem;
