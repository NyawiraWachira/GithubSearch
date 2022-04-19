import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    component : HomepageComponent
  },

  {
    path:'search',
    component : SearchPageComponent
  },
  {
    path: 'user/:id',
    component:UserProfileComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
