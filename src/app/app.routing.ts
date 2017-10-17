import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { raidersComponents } from './raiders/raiders.components';
import { noticiasComponents } from './noticias/noticias.components';

const appRoutes: Routes = [
	{path:'', component: noticiasComponents },
	{path:'noticias', component: noticiasComponents },
	{path:'raiders', component: raidersComponents },
	{path:'**',component: raidersComponents }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);