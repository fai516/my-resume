export interface Activity {
    companyName: string;
    location: string;
    fromDate: string;
    toDate: string;
    position: string;
    description: string[];
}

export interface Project {
    name: string;
    fromDate: string;
    toDate: string;
    sourceCode: string;
    demo: string;
}
