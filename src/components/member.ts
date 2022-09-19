import { Organization } from "./organization";
export class Member {
    private name: string;
    private email: string;
    private organization: Organization;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.organization = null;
    }

    /**
     * Get member email
     */
    public getEmail(): string {
        return this.email;
    }

     /**
     * Set member email
     */
    public setEmail(email: string) {
        this.email = email;
    }

     /**
     * Get member name
     */
    public getName(): string {
        return this.name;
    }

     /**
     * set member name
     */
    public setName(name: string) {
        this.name = name;
    }

     /**
     * Add an organization to a member
     */
    public addOrganization(organization: Organization) {
        this.organization = organization;
    }

    /**
     * Checks if the member is already an organization member
     */
    public isOrganizationMember(organization: Organization): Boolean {
        return this.organization === organization;
    }
}