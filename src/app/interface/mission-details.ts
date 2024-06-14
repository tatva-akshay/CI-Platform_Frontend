import { RecentVolunteer } from "./recent-volunteer"

export interface MissionDetails {
    missionId : number,
    thumbnail : string,
    title : string,
    rating : number,
    shortDescription : number,
    startDate : Date,
    endDate : Date,
    totalSeats : number,
    seatsLeft : number,
    registrationDeadline : Date,
    city : string,
    country : string,
    theme : string,
    organisationName : string,
    media : string[],
    description : string,
    organisationDetails : string,
    documents: string[],
    skills: string[],
    availability : string,
    ratingCount : number,
    recentVolunteers : RecentVolunteer[], 
    volunteerCount : number,
    isFavourite : boolean,
    goal : string
}