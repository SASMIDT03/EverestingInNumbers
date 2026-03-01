import Click from "../assets/click.svg"

type StatsCardProps={
    mainText: string,
    iconUrl: string,
    iconAlt: string,
    onClick?: () => void,
}

function StatsCard(props: StatsCardProps) {

    const hover = props.onClick ? "cursor-pointer hover:bg-primary-shade" : null


    return (
        <div
            onClick={props.onClick}
            className={`
            bg-secondary border-1 border-primary-shade rounded-lg
            font-semibold text-dark-2 w-full
            p-2
            ${hover}  `}>
            <div className="flex flex-row justify-between">
                <img src={props.iconUrl} alt={props.iconAlt} className="w-8 "/>
                {props.onClick && (<img src={Click} alt={props.iconAlt} className="w-4 "/>)}
            </div>

            {props.mainText}
        </div>
    )
}

export default StatsCard