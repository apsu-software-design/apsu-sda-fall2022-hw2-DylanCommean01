import { Members } from "./members";
import { Member } from "./member";
import { Gatherings } from "./gatherings";

export class Organization {
    private name: string;
    private members: Members;
    private gatherings: Gatherings;

    constructor(name: string) {
        this.name = name;
        this.members = new Members();
        this.gatherings = new Gatherings();
    }

    /**
     * Get organization name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set organization name
     */
    public setName(name: string) {
        this.name = name;
    }

    /**
     * Adds members to the organization
     */
    public addMembers(members: Member[]) {
        this.members.addMembers(members);
    }

    /**
     * Adds gatherings to the organization
     */
    public addGathering(name: string, zipCode: string, startTime: string) {
        this.gatherings.addGathering(name, zipCode, startTime);
    }

    /**
     * Gets the members in an organization
     */
    public getMembers(): Member[] {
        return this.members.getMembers();
    }
}