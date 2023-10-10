import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { routePaths } from './constants/router.constant';

const routes: Routes = [
  { path: routePaths.HOME_PAGE, title: "Home Page", component: HomePageComponent },
  { path: routePaths.NOT_FOUND_PAGE, title: "404 - Page not found", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
