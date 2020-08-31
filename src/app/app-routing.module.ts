import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'list', loadChildren: './pages/list/list.module#ListPageModule'
    },
    { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
    { path: 'flags', loadChildren: './pages/flags/flags.module#FlagsPageModule' },
  { path: 'list-with-edit', loadChildren: './pages/list-with-edit/list-with-edit.module#ListWithEditPageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
