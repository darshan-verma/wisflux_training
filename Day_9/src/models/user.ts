export enum Gender{
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export interface user {
    name: string;
    age :  number;
    email: string;
    gender: Gender;
}