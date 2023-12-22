
import { useState } from "react";
import Button from "../../base/button";
import Card from "../card/Index";
import PersonalInformation from "../forms/Personal_info";
import Address from "../forms/address";
import AccountInformation from "../forms/acc_info";

const pages : any = {
    1 : PersonalInformation,
    2 : Address,
    3 : AccountInformation,
}

const CardWithForm = () => {

    const [step, setStep] = useState(1);

    const btnNext = () => {
        if( step < 3 ) {
            setStep(step + 1)
        }
    }

    const btnPrev = () => {
        if (step > 1 ) {
            setStep(step - 1)
        }
    }

    const FormPage = pages[step]

    return (
        <Card>
            <FormPage />
            {step > 1 && (
            <Button onClick={btnPrev} type="button">
                Previous
            </Button>
            )}

            {step < 3 && (
            <Button onClick={btnNext} type="button">
                Next
            </Button>
            )}

            {step === 3 && (
                <Button type="submit">
                    Submit
                </Button>
            )}

        </Card>
    )
}

export default CardWithForm;