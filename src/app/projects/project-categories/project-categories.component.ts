import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../models/project';

@Component({
    selector: 'project-categories',
    templateUrl: 'project-categories.component.html'
})

export class ProjectCategoriesComponent implements OnInit {
    
    @Input() title: string;
    @Input() projects: Project[];

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
    }
}
