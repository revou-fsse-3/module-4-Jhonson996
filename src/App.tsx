import './App.css'
import { Form, Formik } from 'formik'
import CardWithForm from './components/features/cards-with-form';
import { validationschema } from './components/features/cards-with-form/validation';

const initialValue = {
  username: '',
  password: '',
};

function App() {
  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationschema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 1));
        }}
      >
        <Form>
          <CardWithForm />
        </Form>
      </Formik>
    </>
  )
}

export default App
