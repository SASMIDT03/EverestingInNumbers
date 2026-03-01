
type StatsCardProps={
    titleText: string,
    mainText: string,
}

export function ModalCard(props: StatsCardProps) {
    return (
        <div
            className="
            bg-secondary border-1 border-primary-shade rounded-lg
            font-semibold text-dark-2 w-full
            p-2
            ">
            <div className="text-dark-shade font-medium text-sm"> {props.titleText} </div>
            <div> {props.mainText} </div>
        </div>
    )
}