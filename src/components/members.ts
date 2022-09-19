import { Member } from "./member";
export class Members {
    members: Member[];

    constructor() {
        this.members = [];
    }
    /**
     * Returns the members
     */
    public getMembers(): Member[] {
        return this.members;
    } 
    /**
     * Adds a member to the array of members 
     */
    public addMember(name: string, email?: string) {
        this.members.push(new Member(name, email));
    }
    
    /**
     * Adds multiple members
     */
    public addMembers(members: Member[]) {
        if(members) {
            members.forEach(member => this.members.push(member));
        }
    }
    /**
     * Search the members using a query. Returns an array of member names.
     */
    public membersSearch(query: string): string[] {
        var searchResults: string[] = [];
        var filteredQuery: Member[];
        if (query) {
            filteredQuery = this.members.filter((member) => { 
                 return member.getName().toLowerCase().trim() === query.toLowerCase().trim();
            });
        }
        if (filteredQuery) {
            filteredQuery.forEach((member) => {
                return searchResults.push(member.getName());
            });
        }
        return searchResults;
    }
}