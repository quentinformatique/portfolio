export default class SchoolExperience {
  private readonly _title: string;
  private readonly _description: string;
  private readonly _type: ExperienceType;
  private readonly _logoFilename: string;

  constructor(title: string,
              description: string,
              type: ExperienceType,
              logoFilename: string) {

    this._title = title;
    this._description = description;
    this._type = type;
    this._logoFilename = logoFilename;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get type(): ExperienceType {
    return this._type;
  }

  get logoFilename(): string {
    return this._logoFilename;
  }
}

export enum ExperienceType {
  internship = "Internship",
}