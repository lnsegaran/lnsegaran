import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'music',
    templateUrl: 'music.component.html',
    styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {
    
    constructor(
        private router: Router) {
    }

    ngOnInit(): void {
    }
}
