import type {EverestingStats} from "./EverestingStats.ts";

interface StatsModalProps {
    stats: EverestingStats
}

export type StatsModalComponent = React.FC<StatsModalProps>