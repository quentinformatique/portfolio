export default class Project {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _banner: BannerAmbience;
  private readonly _url: string;

  constructor(name: string,
              description: string,
              banner: BannerAmbience,
              url: string) {

    this._name = name;
    this._description = description;
    this._banner = banner;
    this._url = url;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get banner(): BannerAmbience {
    return this._banner;
  }

  get url(): string {
    return this._url;
  }
}

export class BannerAmbience {
  private readonly _filename: string;
  private readonly _color: string;

  constructor(filename: string, color: string = "transparent") {
    this._filename = filename;
    this._color = color;
  }

  get filename(): string {
    return this._filename;
  }

  get color(): string {
    return this._color;
  }
}