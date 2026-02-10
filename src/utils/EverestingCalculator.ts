import type { RideInformation } from "./types/RideInformation.ts";
import type { EverestingStats } from "./types/EverestingStats.ts";

const heightOfMountEverest: number = 8849

export const CalculateEverestingStats = (rideInformation: RideInformation): EverestingStats => {

    const totalNumberOfLaps: number = Math.ceil(heightOfMountEverest / rideInformation.elevationGain)
    const totalDistance: number = Math.ceil(totalNumberOfLaps * rideInformation.climbingDistance * 2)
    const avgClimbingTime: number = Math.ceil(rideInformation.climbingDistance / rideInformation.climbingSpeed * 3600)
    const totalClimbingTime: number = avgClimbingTime * totalNumberOfLaps
    const avgDescendingTime: number = Math.ceil(rideInformation.climbingDistance / rideInformation.descendingSpeed * 3600)
    const totalDescendingTime: number = avgDescendingTime * totalNumberOfLaps
    const totalPauseTime: number = rideInformation.durationOfStops * rideInformation.numberOfStops

    const everestingStats: EverestingStats = {
        totalNumberOfLaps: totalNumberOfLaps,
        totalDistance: totalDistance,
        avgClimbingTime: avgClimbingTime,
        avgDescendingTime: avgDescendingTime,
        totalClimbingTime: totalClimbingTime,
        totalDescendingTime: totalDescendingTime,
        totalPauseTime: totalPauseTime,
        totalTime: totalClimbingTime + totalDescendingTime + totalPauseTime,
        totalEnergy: 0,
    }
    return everestingStats;
}