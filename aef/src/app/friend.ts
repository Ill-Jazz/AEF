export class Friend {

    firstname: string; 
    lastname: string;
    email: string; 
    phoneNumber: string;
    discordID: string;
    socialMediaLink: string;
    description: string;
    zodiacSign: string;
    luckyNumber: string;
    greatestAchievement: string;
    favouriteFood: string;
    talent: string;
    languages: string;

    constructor(
        firstname: string, 
        lastname: string, 
        email: string, 
        phoneNumber: string,
        discordID: string,
        socialMediaLink: string,
        description: string,
        zodiacSign: string,
        luckyNumber: string,
        greatestAchievement: string,
        favouriteFood: string,
        talent: string,
        languages: string

    ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phoneNumber  = phoneNumber;
        this.discordID = discordID;
        this.socialMediaLink = socialMediaLink;
        this.description = description;
        this.zodiacSign = zodiacSign;
        this.luckyNumber = luckyNumber;
        this.greatestAchievement = greatestAchievement;
        this.favouriteFood = favouriteFood;
        this.talent = talent;
        this.languages = languages;
    }
