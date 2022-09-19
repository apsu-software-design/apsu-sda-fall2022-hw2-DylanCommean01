import { Members } from "./members";

export class Gathering {
    private title: string;
    private zipCode: string;
    private startTime: string;
    private members: Members;

    constructor(title: string, zipCode: string, startTime: string) {
        this.title = title;
        this.zipCode = zipCode;
        this.startTime = startTime;
        this.members = new Members;
    }

    /**
     * Get the gathering title
     */
    public getTitle(): string {
        return this.title;
    }

    /**
     * SET the gathering title
     */
    public setTitle(title: string) {
        this.title = title;
    }

    /**
     * Get the gathering zipcode
     */
    public getZipCode(): string {
        return this.zipCode;
    }

    /**
     * Set the gathering zipcode
     */
    public setZipCode(zipCode: string) {
        this.zipCode = zipCode;
    }

    /**
     * Get the gathering start time
     */
    public getStartTime(): string {
        return this.startTime;
    }

    /**
     * Set the gathering start time
     */
    public setStartTime(startTime: string) {
        this.startTime = startTime;
    }

    /**
     * Add a member to the gathering
     */
    public addMember(name: string, email?: string) {
        this.members.addMember(name, email);
    }

    /**
     * Returns an array of the members attending the gathering.
     */
    public getMembers(): string[] {
        var memberStr: string[] = [];
        this.members.getMembers().forEach((member) => { 
           return memberStr.push(member.getName());
        });
        return memberStr;
    }
}