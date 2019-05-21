import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../models/project';

@Component({
    selector: 'project-category',
    templateUrl: 'project-category.component.html'
})

export class ProjectCategoryComponent implements OnInit {
    
    @Input() title: string;
    @Input() projects: Project[];

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
    }
}
