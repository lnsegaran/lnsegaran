import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../models/project';

@Component({
    selector: 'project-details',
    templateUrl: 'project-details.component.html'
})

export class ProjectDetailsComponent implements OnInit {
    
    @Input() project: Project;

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
    }
}
