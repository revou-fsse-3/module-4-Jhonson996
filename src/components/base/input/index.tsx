import { InputHTMLAttributes } from "react";

type InputProps = {
    label : string;
    erromessage? : string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({erromessage, label, ...rest}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <div>
                <input {...rest}/>
                {erromessage && <p>{erromessage}</p>}
            </div>
        </>
    )
}

export default Input;