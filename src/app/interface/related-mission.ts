export interface RelatedMission {
    missionId : number,
    thumbnail: string,
    city : string,
    country : string,
    title: string,
    shortDescription : string,
    organisationName : string,
    rating : number,
    startDate : Date,
    endDate : Date,
    registrationDeadline : Date,
    totalSeats : number,
    seatsLeft : number,
    isFavourite : boolean,
    isApplied : boolean,
    theme : string,
    goal : string
}