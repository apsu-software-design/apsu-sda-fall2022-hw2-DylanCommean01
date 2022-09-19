//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import { Members } from './components/members';
import { Gatherings } from './components/gatherings';
import { Organizations } from './components/organizations';
import { Member } from './components/member';
import { Gathering } from './components/gathering';
import { Organization } from './components/organization';

export class GatheringManager {
    private members: Members;
    private gatherings: Gatherings;
    private organizations: Organizations;

    constructor() {
        this.members = new Members();
        this.gatherings = new Gatherings();
        this.organizations = new Organizations();
    }

    /**
     * Adds a member
     */
    addMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    /**
     * Adds a gathering
     */
    addGathering(title: string, location: string, date: string) {
        this.gatherings.addGathering(title, location, date);
    }

    /**
     * Adds an organization
     */
    addOrganization(title: string) {
        this.organizations.addOrganization(title);
    }

    /**
     * Adds a member to a specified gathering
     */
    addMemberToGathering(name: string, gatheringTitle: string) {
        var member: Member = this.members.getMembers().find((member) => { 
            return member.getName().toLowerCase().trim() === name.toLowerCase().trim();
        });
        var gathering: Gathering = this.gatherings.getGatherings().find((gathering) => {
            return gathering.getTitle() === gatheringTitle;
        });
        if (member && gathering) {
            gathering.addMember(member.getName(), member.getEmail());
        }
    }

    /**
     * Adds a gathering to an organization
     */
    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        var gathering: Gathering = this.gatherings.getGatherings().find((gathering) => {
            return gathering.getTitle() === gatheringTitle;
        });
        var organization: Organization = this.organizations.getOrganizations().find((organization) => {
            return organization.getName() === organizationTitle;
        });

        if (gathering && organization) {
            organization.addGathering(gathering.getTitle(), gathering.getZipCode(), gathering.getStartTime());
        }
    }

    /**
     * Modifies a gathering title or start date
     */
    modifyGathering(title: string, newTitle: string, newDate?: string) {
        this.gatherings.modifyGathering(title, newTitle, newDate);
    }

    /**
     * Returns the members that are in a gathering
     */
    getMembers(gatheringTitle: string): string[] {
        return this.gatherings.getMembers(gatheringTitle);
    }

    /**
     * Searches for member names
     */
    findMemberNames(query: string): string[] {
        return this.members.membersSearch(query);
    }

    /**
     * Searches for gathering names
     */
    findGatheringNames(query: string): string[] {
        return this.gatherings.gatheringsSearch(query);
    }

    /**
     * Searches for organization names
     */
    findOrganizationNames(query: string): string[] {
        return this.organizations.organizationsSearch(query);
    }
}
