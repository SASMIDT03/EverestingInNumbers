import type {StatsModalComponent} from "../../utils/types/StatsModal.ts";

export const TimeModal: StatsModalComponent = ({stats}) => {
    return (
        <div
            onClick={(e) => {e.stopPropagation()}}
            className="bg-primary  rounded-lg">
            <p>{stats.totalTime}</p>
            {stats.avgClimbingTime}
            hej
        </div>
    )
}