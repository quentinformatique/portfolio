import SchoolExperience from "./SchoolExperience.ts";

export default class School {
  private readonly _name: string;
  private readonly _type: SchoolType;
  private readonly _years: SchoolDuration;
  private readonly _country: string;
  private readonly _description: string;
  private readonly _experiences: SchoolExperience[];

  constructor(name: string,
              type: SchoolType,
              years: SchoolDuration,
              country: string,
              description: string,
              experiences: SchoolExperience[] = []) {

    this._name = name;
    this._type = type;
    this._years = years;
    this._country = country;
    this._description = description;
    this._experiences = experiences;
  }

  get name(): string {
    return this._name;
  }

  get type(): SchoolType {
    return this._type;
  }

  get years(): SchoolDuration {
    return this._years;
  }

  get country(): string {
    return this._country;
  }

  get description(): string {
    return this._description;
  }

  get experiences(): SchoolExperience[] {
    return this._experiences;
  }
}

export class SchoolDuration {
  private readonly _begin: number;
  private readonly _end?: number;

  constructor(begin: number, end?: number) {
    this._begin = begin;
    this._end = end;
  }

  get begin(): number {
    return this._begin;
  }

  get end(): number|undefined {
    return this._end;
  }
}

export enum SchoolType {
  highschool = "Highschool",
  college = "College",
  university = "University",
}