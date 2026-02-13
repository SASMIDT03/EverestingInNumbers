import type {EverestingStats} from "../utils/types/EverestingStats.ts";
import {StatsCard} from "./StatsCard.tsx";

type StatsDisplayProps = {
    stats: EverestingStats | null
}

export function StatsDisplay(props: StatsDisplayProps) {
    if (!props.stats) return (
        <div className="
            bg-secondary border-1 border-primary-shade rounded-lg
            p-6 m-6 w-[30vw] min-h-[51vh]
            text-center font
            ">
            Enter route details or import strava-segment to calculate your Everest in Numbers.
        </div>
    )

    return (
        <div className="
            bg-primary border-1 border-primary-shade rounded-lg
            p-6 m-6 w-[30vw] min-h-[51vh]
            font-bold text-lg
            ">
            Your everesting stats
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
                ">
                <StatsCard mainText={"Test1"} />
                <StatsCard mainText={"Test1"} />
                <StatsCard mainText={"Test1"} />
                <StatsCard mainText={"Test1"} />
                <StatsCard mainText={"Test1"} />
            </div>
        </div>
    )
}