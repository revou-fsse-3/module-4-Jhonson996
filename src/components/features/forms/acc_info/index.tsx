import { useFormikContext } from "formik"
import Input from "../../../base/input"


type FormInterface = {
    username : string;
    password : string;
}


const AccountInformation = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="username" value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} erromessage={errors.username} />
            <Input type="password" label="password" value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} erromessage={errors.password} />
        </>
    )
}

export default AccountInformation;
