export enum Gender {
  MALE = 0,
  FEMALE
}

export enum Profession {
  UNEMPLOYED = 0,
  ENGINEER,
  LAWYER,
  DRIVER,
  TEACHER,
  STUDENT
}

export class User {
  Id: number;
  Name: string;
  Email: string;
  City: string;
  Birthdate?: Date;
  Description?: string;
  Gender?: Gender;
  Profession?: Profession;
  Enabled?: boolean;
}
