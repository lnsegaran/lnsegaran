import { ProjectStep } from './project-step';

export class Project {
    Title: string;
    Description: string;
    Image: string;
    Date: Date;
    Type: string;
    Tags: string[];
    Steps: ProjectStep[];
}