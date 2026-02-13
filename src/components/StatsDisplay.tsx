import type {EverestingStats} from "../utils/types/EverestingStats.ts";
import {StatsCard} from "./StatsCard.tsx";
import DistanceIcon from "../assets/distance.svg"
import LapsIcon from "../assets/repeat.svg"
import ClockIcon from "../assets/clock.svg"
import EnergyIcon from "../assets/energy.svg"

type StatsDisplayProps = {
    stats: EverestingStats | null
}

export function StatsDisplay( stats: StatsDisplayProps) {
    if (!stats.stats) return (
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
                <StatsCard mainText={ stats.stats!.totalDistance.toString() + "km"} iconUrl={DistanceIcon} iconAlt={"Distance icon"}/>
                <StatsCard mainText={ stats.stats!.totalNumberOfLaps.toString() } iconUrl={LapsIcon} iconAlt={"Laps icon"}/>
                <StatsCard mainText={ stats.stats!.totalTime.toString() } iconUrl={ClockIcon} iconAlt={"Clock icon"}/>
                <StatsCard mainText={ stats.stats!.totalEnergy.toString() + "kcal" } iconUrl={EnergyIcon} iconAlt={"Energy icon"}/>
            </div>
        </div>
    )
}