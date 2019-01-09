import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../models/project';

@Component({
    selector: 'project-detail',
    templateUrl: 'project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    
    @Input() project: Project;

    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
    }
}
