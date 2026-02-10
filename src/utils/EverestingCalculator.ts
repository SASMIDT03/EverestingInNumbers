import type {RideInformation} from "./types/RideInformation.ts";
import type {EverestingStats} from "./types/EverestingStats.ts";
import { CalculationsConstants } from "./CalculationsConstants.ts";

function CalculateCyclingPower(mass: number, velocity: number, slope: number) {
    const theta = Math.atan(slope)

    const gracityTerm = mass * CalculationsConstants.GRAVITY_CONSTANT * velocity * Math.sin(theta)
    const rollingTerm = CalculationsConstants.ROLLING_RESISTANCE * mass * CalculationsConstants.GRAVITY_CONSTANT * velocity
    const aeroTerm = 0.5 * CalculationsConstants.AIR_DENSITY * CalculationsConstants.CdA * Math.pow(velocity, 3)

    return gracityTerm + rollingTerm + aeroTerm
}


export const CalculateEverestingStats = (rideInformation: RideInformation): EverestingStats => {

    const totalNumberOfLaps: number = Math.ceil(CalculationsConstants.HEIGHT_OF_MOUNT_EVEREST / rideInformation.elevationGain)
    const totalDistance: number = Math.ceil(totalNumberOfLaps * rideInformation.climbingDistance * 2)
    const avgClimbingTime: number = Math.ceil(rideInformation.climbingDistance / rideInformation.climbingSpeed * 3600)
    const totalClimbingTime: number = avgClimbingTime * totalNumberOfLaps
    const avgDescendingTime: number = Math.ceil(rideInformation.climbingDistance / rideInformation.descendingSpeed * 3600)
    const totalDescendingTime: number = avgDescendingTime * totalNumberOfLaps
    const totalPauseTime: number = rideInformation.durationOfStops * rideInformation.numberOfStops

    const slope = rideInformation.elevationGain / (rideInformation.climbingDistance * 1000)
    const climbingPower = CalculateCyclingPower(rideInformation.totalWeight, rideInformation.climbingSpeed * 0.2777, slope)
    const descendingPower = CalculateCyclingPower(rideInformation.totalWeight, rideInformation.descendingSpeed * 0.2777, -slope)

    const mechanicalEnergy = climbingPower * totalClimbingTime + descendingPower * totalDescendingTime
    const metabolicEnergy = mechanicalEnergy / CalculationsConstants.HUMAN_EFFICIENCY
    const energyInKcal = Math.ceil(metabolicEnergy / CalculationsConstants.JOULE_PR_KCAL)

    return {
        totalNumberOfLaps: totalNumberOfLaps,
        totalDistance: totalDistance,
        avgClimbingTime: avgClimbingTime,
        avgDescendingTime: avgDescendingTime,
        totalClimbingTime: totalClimbingTime,
        totalDescendingTime: totalDescendingTime,
        totalPauseTime: totalPauseTime,
        totalTime: totalClimbingTime + totalDescendingTime + totalPauseTime,
        totalEnergy: energyInKcal,
    };
}