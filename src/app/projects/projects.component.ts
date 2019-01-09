import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from './models/project';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

    projectTypes: string[];
    projects: Project[];

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.projectTypes = ['Software','Hardware','Visual'];

        this.projects = new Array<Project>();
        this.projects.push(
            { 
                Title : 'Quad Gate Inverter', 
                Description: `
                                <p>
                                    A gate inverter can invert gate signals so when the input signal is high, the output is low and vice versa. 
                                    I use this for my eurorack drum synth to add multiple layers to high hats.
                                </p>
                              
                                Features:
                                <ul>
                                    <li>Inverts up to four incoming signals.</li>
                                    <li>Buffers high output signals.</li>
                                    <li>3HP width.</li>
                                </ul>
                            `, 
                Image: 'image',
                Date: new Date('2017-11-01'),
                Type: 'Hardware',
                Tags: [
                    'Eurorack', 'Electronics', 'Gate Inverter', 'Gate', 'Inverter'
                ],
                Steps: [
                    {
                        Sequence: 1,
                        Title: 'Tools and Parts',
                        Description: `
                                        <div class="row">
                                            <div class="col-6">
                                                Tools:
                                                <ul>
                                                    <li>Soldering Iron</li>
                                                    <li>Solder</li>
                                                    <li>Wire</li>
                                                    <li>Drill</li>
                                                    <li>
                                                        Drill Bits:
                                                        <ul>
                                                            <li>3mm</li>
                                                            <li>5mm</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="col-6">
                                                Parts:
                                                <ul>
                                                    <li>CD4049 Hex Inverter (<a href="https://www.ebay.co.uk/itm/2-10PCS-CD4049BE-CD4049-4049BE-DIP-16-IC-TI-HIGH-QUALITY/142637374288" target="_blank">£0.99</a>)</li>
                                                    <li>16 Pin IC Socket (Optional)</li>
                                                    <li>40 Pin (2x20) Male Right Angle Header (<a href="https://www.ebay.co.uk/itm/40-Pin-2-x-20-Male-Right-Angle-Header-for-Raspberry-Pi-Zero-Reset-TV-Pins/162249784704" target="_blank">£2.00</a>)</li>
                                                    <li>Strip Board (16 x 12)</li>
                                                    <li>Mono Panel Mount Jack Sockets x 8 (<a href="https://www.ebay.co.uk/itm/5pcs-3-5-mm-Female-MONO-Audio-Switched-Connector-jack-Socket-Panel-DIY-Adapters/173083520326" target="_blank">£2.12</a>)</li>
                                                    <li>3mm Acrylic Sheet (Wood or Card would also work)
                                                </ul>
                                            </div>
                                        </div>
                                     `
                    },
                    {
                        Sequence: 2,
                        Title: 'The Circuit',
                        Description: `
                                        <p>The module uses a very simple circuit using a 4049 Hex Inverter.</p>
                                        Pins:
                                        <ul>
                                            <li>1 - Supply (5v)</li>
                                            <li>2 - Inverted Output 1</li>
                                            <li>3 - Input 1</li>
                                            <li>4 - Inverted Output 2</li>
                                            <li>5 - Input 2</li>
                                            <li>6 - O/C</li>
                                            <li>7 - O/C</li>
                                            <li>8 - Ground</li>
                                            <li>9 - O/C</li>
                                            <li>10 - O/C</li>
                                            <li>11 - Input 3</li>
                                            <li>12 - Inverted Output 3</li>
                                            <li>15 - O/C</li>
                                            <li>13 - Input 4</li>
                                            <li>12 - Inverted Output 4</li>
                                            <li>16 - O/C</li>
                                        </ul>
                                    `,
                        Images: [
                            {
                                Image: 'assets/projects/images/quad-gate-inverter/Schematic.PNG',
                                Description: 'Schematic'
                            }
                        ]
                    },
                    {
                        Sequence: 3,
                        Title: 'Stripboard Layout',
                        Images: [
                            {
                                Image: 'assets/projects/images/quad-gate-inverter/Schematic.PNG',
                                Description: 'Schematic'
                            }
                        ]
                    }
                ]
            } as Project
        );
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            var section = params['section'];
            this.scrollTo(section);
        });
    }

    scrollTo(id: string): void {
        var element = document.getElementById(id);
        
        if(!element){
            setTimeout(() => {
                this.scrollTo(id);
            }, 100);
            return;
        }

        element.scrollIntoView();
    }
}
