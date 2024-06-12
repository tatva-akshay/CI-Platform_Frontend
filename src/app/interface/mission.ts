import { MissionUser } from "./mission-user"

export interface Mission {
    city : string,
    cityId : number,
    country : string,
    countryId : number,
    endDate : Date,
    goal : string,
    goalStatus : number,
    missionId : number,
    missionUserDTO : MissionUser,
    organisationName : string,
    ratings : number,
    registrationDeadline : Date,
    seatsLeft : number,
    shortDescription : string,
    skills : string,
    startDate : Date,
    status : number,
    theme : string,
    thumbnail : string,
    title : string,
    totalSeats : number
}