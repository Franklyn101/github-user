import { Routes } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';

export const routes: Routes = [
    {
        path: 'user-details',
        loadComponent: () => import('./github-details/github-details.component').then(m => m.GithubDetailsComponent),
        // children: [
        //     {
        //         path: 'show-details/:id',
        //         component: ShowDetailsComponent
        //     }

        // ]
        
    },
    {
        path: 'show-details/:id',
        component: ShowDetailsComponent
    }
];
