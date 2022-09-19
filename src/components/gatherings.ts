import { Gathering } from "./gathering";

export class Gatherings {
    private gatherings: Gathering[];
    
    constructor() {
        this.gatherings = [];
    }

    /**
     * Get the gatherings
     */
    public getGatherings(): Gathering[] {
        return this.gatherings;
    }

    /**
     * Add a new gathering
     */
    public addGathering(name: string, zipCode: string, date: string) {
        this.gatherings.push(new Gathering(name, zipCode, date));
    }

    /**
     * Adds a member to the gathering
     */
    public addMemberToGathering(gatheringTitle: string, name: string) {
        this.gatherings.find((gathering) => {
            return gathering.getTitle() === gatheringTitle;
        }).addMember(name);
    }

    /**
     * Modifies the title of a gathering or modifies the start date.
     */
    public modifyGathering(title: string, newTitle: string, newDate?: string) {
        var gathering: Gathering = this.gatherings.find((gathering) => {
            return gathering.getTitle() === title;
        });
        if (gathering && newTitle) {
            gathering.setTitle(newTitle);
        }
        if (gathering && newDate) {
            gathering.setStartTime(newDate);
        } 
        console.log(gathering);
    }

    /**
     * Get the members attending a specified gathering
     */
    public getMembers(gatheringTitle: string): string[] {
        var str: string[] = [];
        var gathering: Gathering = this.gatherings.find((gathering) => {
            return gathering.getTitle() == gatheringTitle;
        });
        if (gathering) {
            gathering.getMembers().forEach((member) => { 
                return str.push(member)
            });
        }
        return str;
    }

    /**
     * Search the gatherings using a query. Returns an array of gathering names.
     */
    public gatheringsSearch(query: string): string[] {
        var searchResults: string[] = [];
        var filteredQuery: Gathering[];
        if (query) {
            filteredQuery = this.gatherings.filter((gathering) => {
                return gathering.getTitle().toLowerCase().trim() === query.toLowerCase().trim();
            });
        }
        if (filteredQuery) {
            filteredQuery.forEach((gathering) => {
                return searchResults.push(gathering.getTitle());
            });
        }
        return searchResults;
    }
}