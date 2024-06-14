export interface RelatedMission {
    missionId : number,
    status: number,
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
    theme : string
}