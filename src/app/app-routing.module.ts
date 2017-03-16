import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {BookshelfComponent} from './bookshelf.component';
import {AboutusComponent} from './aboutus.component';
import {MyBooksComponent} from './mybooks.component';
import {MyReviewsComponent} from './my-reviews.component';
import {LoginComponent} from './login.component';
import {pagenotfoundComponent} from './pagenotfound.component';
const routes:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'book-shelf',
        component:BookshelfComponent
    },
    {
        path:'aboutus',
        component:AboutusComponent
    },
    {
        path:'my-books',
        component:MyBooksComponent
    },
    {
        path:'my-reviews',
        component:MyReviewsComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
   
    {
        path:'',
        redirectTo: '/home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:pagenotfoundComponent
    },

    

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}