import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Item } from "../../Types";
import NovoItem from "./NovoItem";
import useStyles from "./styles";
import { Stack } from "@mui/material";

const Lista = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([] as Item[]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSalvarItem = (itemLista: Item) => {
    const adicionarItem = [...item];
    adicionarItem.push(itemLista);
    setItem(adicionarItem);
    return itemLista;
  };

  return (
    <>
      <Stack sx={styles.root} spacing={2}>
        <Typography variant="h4">Lista de Atividade</Typography>
        <Grid container sx={styles.containerItens} spacing={2}>
          {item.map((itemDaLista) => {
            return (
              <Grid item md={10} sx={styles.itemContainer}>
                <Paper>
                  <Typography>Atividade: {itemDaLista.titulo}</Typography>
                  <Typography>Descrição: {itemDaLista.descricao}</Typography>
                  <Typography>Nivel de prioridade:{itemDaLista.prioridade}</Typography>
                </Paper>
              </Grid>
            );
          })}
          <Grid item mb={12} sm={12} xs={12} sx={styles.containerBotaoAdicionarItem}>
            <Fab
              onClick={() => handleOpen()}
              size="medium"
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </Stack>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        onBackdropClick={handleClose}
      >
        <NovoItem
          handleClose={() => handleClose()}
          handleArmazenarItem={(item) => handleSalvarItem(item)}
        />
      </Dialog>
    </>
  );
};

export default Lista;
