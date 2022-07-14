import * as yup from 'yup';

const validationSchema = yup.object().shape({
    nome: yup.string(),
    email: yup.string(),
    senha: yup.string(),
});

export default validationSchema;