import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';//import router module

//import the components
import { LandingPageComponent } from '../component/landing-page/landing-page.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/search-results',
        pathMatch: 'full'
    },
    { path: 'search-results', component: LandingPageComponent },
    
];

//define an array of routes which is of type Routes 
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);