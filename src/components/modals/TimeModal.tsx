import type {StatsModalComponent} from "../../utils/types/StatsModal.ts";
import {ModalCard} from "../ModalCard.tsx";
import {formatTime} from "../../utils/Formater.ts";
import ClockIcon from "../../assets/clock.svg";


export const TimeModal: StatsModalComponent = ({stats}) => {
    return (
        <div
            onClick={(e) => {e.stopPropagation()}}
            className="
                bg-primary  rounded-lg p-6
                flex flex-col gap-2
                ">
            <div className="flex flex-row gap-2">
                <img src={ClockIcon} alt={"Clock icon"} className="w-8 "/>
                <h3>Time Breakdown</h3>
            </div>
            <ModalCard titleText={"Total Time"} mainText={formatTime(stats.totalTime)} />
            <div> Per Lap </div>
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ModalCard titleText={"Avg. Lap Time"} mainText={formatTime(stats.avgClimbingTime + stats.avgDescendingTime)} />
                <ModalCard titleText={"Avg. Climbing Time"} mainText={formatTime(stats.avgClimbingTime)} />
                <ModalCard titleText={"Avg. Descending Time"} mainText={formatTime(stats.avgDescendingTime)} />
            </div>
            <div> Totals </div>
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ModalCard titleText={"Total Climbing Time"} mainText={formatTime(stats.totalClimbingTime)} />
                <ModalCard titleText={"Total Descending Time"} mainText={formatTime(stats.totalDescendingTime)} />
                <ModalCard titleText={"Total Break Time"} mainText={formatTime(stats.totalPauseTime)} />
            </div>
        </div>
    )
}