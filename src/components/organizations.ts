import { Organization } from "./organization";

export class Organizations {
    private organizations: Organization[];

    constructor() {
        this.organizations = [];
    }

    /**
     * Get the organizations
     */
    public getOrganizations(): Organization[] {
        return this.organizations;
    }

    /**
     * Add an Organization
     */
    public addOrganization(title: string) {
        this.organizations.push(new Organization(title));
    }

    /**
    * Search the organizations using a query. Returns an array of organization names.
    */
    public organizationsSearch(query: string): string[] {
        var searchResults: string[] = [];
        var filteredQuery: Organization[];
        if (query) {
            filteredQuery = this.organizations.filter((organizations) => {
                return organizations.getName().toLowerCase().trim() == query.toLowerCase().trim();
            });
        }
        if (filteredQuery) {
            filteredQuery.forEach((organization) => {
                return searchResults.push(organization.getName())
            });
        }
        return searchResults;
    }
}