import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects'
    }
  },
  {
    path: 'projects/:section',
    component: ProjectsComponent,
    data: {
      title: 'Projects'
    }
  },
  {
    path: 'music',
    component: MusicComponent,
    data: {
      title: 'Music'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
