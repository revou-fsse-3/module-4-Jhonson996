import { useFormikContext } from "formik"
import Input from "../../../base/input"


type FormInterface = {
    address : string;
    city : string;
    state : string;
    zipcode : string;
}


const Address = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="address" value={values.address} name="address" onChange={handleChange} onBlur={handleBlur} erromessage={errors.address} />

            <Input type="text" label="city" value={values.city} name="city" onChange={handleChange} onBlur={handleBlur} erromessage={errors.city} />

            <Input type="text" label="state" value={values.state} name="state" onChange={handleChange} onBlur={handleBlur} erromessage={errors.state} />

            <Input type="text" label="zipcode" value={values.zipcode} name="zipcode" onChange={handleChange} onBlur={handleBlur} erromessage={errors.zipcode} />
        </>
    )
}

export default Address;
