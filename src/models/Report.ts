export class Report{

    type: number;
    description: string;
    time: string;
    username: string;
    media: string;
    latitude: number;
    longitude: number;

    constructor(type: number, description: string, time: string, username: string, media: string, latitude: number, longitude: number){
        this.type = type;
        this.description = description;
        this.time = time;
        this.username = username;
        this.media = media;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}