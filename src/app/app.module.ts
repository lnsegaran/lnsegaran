import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// Layout
import { ShellComponent } from './layout/shell.component';
import { TopnavComponent } from './layout/top-nav/top-nav.component';

// Pages
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCategoriesComponent } from './projects/project-categories/project-categories.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';

// Config
import { Routing } from './app.routing';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Layout
    ShellComponent,
    TopnavComponent,
    // Pages
    AboutComponent,
    ProjectsComponent,
    ProjectCategoriesComponent,
    ProjectDetailsComponent,
    MusicComponent,
    ContactComponent,
    // Pipes
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    // Bootstrap
    NgbModule.forRoot(),
    // Routing
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
