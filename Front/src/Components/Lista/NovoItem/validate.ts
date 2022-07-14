import * as yup from 'yup';

const validationSchema = yup.object().shape({
    titulo: yup.string(),
    descicao: yup.string(),
    prioridade: yup.string().notRequired(),
});

export default validationSchema;