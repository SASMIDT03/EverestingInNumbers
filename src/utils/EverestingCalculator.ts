import type { RideInformation } from "./types/RideInformation.ts";
import type { EverestingStats } from "./types/EverestingStats.ts";

const heightOfMountEverest: number = 8849

export const CalculateEverestingStats = (rideInformation: RideInformation): EverestingStats => {
    const everestingStats: EverestingStats = {
        totalNumberOfLaps: Math.ceil(heightOfMountEverest / rideInformation.elevationGain),
        totalDistance: 0,
        totalTime: 0,
        totalEnergy: 0,
    }
    return everestingStats;
}