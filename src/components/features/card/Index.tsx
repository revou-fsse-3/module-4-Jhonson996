import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <div className="bg-cyan-700 p-8">
            {children}
        </div>
    )
}

export default Card;