
type StatsCardProps={
    mainText: string,
    iconUrl: string,
    iconAlt: string,
}

export function StatsCard(props: StatsCardProps) {
    return (
        <div className="
            bg-secondary border-1 border-primary-shade rounded-lg
            font-semibold text-dark-2 w-full
            p-2
            ">
            <img src={props.iconUrl} alt={props.iconAlt} className="w-8 " />
            {props.mainText}
        </div>
    )
}