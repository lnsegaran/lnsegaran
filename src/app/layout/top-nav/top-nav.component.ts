import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
    selector: 'top-nav',
    templateUrl: 'top-nav.component.html',
    styleUrls: ['./top-nav.component.css']
})

export class TopnavComponent implements OnInit {

    // Title
    title: string;
    
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.router.events
        .filter(e => e instanceof NavigationEnd)
        .forEach(e => {
            var data = this.route.root.firstChild.snapshot.data;
            this.title = data['title'];
        });
    }

    ngOnInit(): void {
    }

}
