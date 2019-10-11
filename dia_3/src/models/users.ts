enum Gender {
  MALE,
  FEMALE
}

enum Profession {
  UNEMPLOYED,
  ENGINEER,
  LAWYER,
  DRIVER,
  TEACHER
}

export class User {
  Id: number;
  Name: string;
  Email: string;
  City: string;
  Birthdate?: Date;
  DNI?: string;
  Description?: string;
  Gender?: Gender;
  Profession?: Profession;
  Enabled?: boolean;
}
