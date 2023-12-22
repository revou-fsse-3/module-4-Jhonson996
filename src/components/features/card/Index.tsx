import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <div className="bg-cyan-500 w-1/3 h-1/3">
            {children}
        </div>
    )
}

export default Card;