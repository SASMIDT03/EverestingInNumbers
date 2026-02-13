
type StatsCardProps={
    mainText: string
}

export function StatsCard(props: StatsCardProps) {
    return (
        <div className="
            bg-secondary border-1 border-primary-shade rounded-lg
            font-semibold text-dark-2 w-full
            ">
            {props.mainText}
        </div>
    )
}