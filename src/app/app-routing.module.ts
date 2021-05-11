import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreateExpertPageComponent } from './pages/expert/create-expert-page/create-expert-page.component';
import { ExpertDetailsPageComponent } from './pages/expert/expert-details-page/expert-details-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { CreateTagPageComponent } from './pages/tag/create-tag-page/create-tag-page.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo:'/login'
},
{
  path: 'login',
  component: LoginpageComponent,
},
{
  path: 'register',
  component: RegisterpageComponent,
},
{
  path: 'tags',
  component: TagPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'experts',
  component: ExpertPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'experts/:id',
  component: ExpertDetailsPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'createTag',
  component: CreateTagPageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'createExpert',
  component: CreateExpertPageComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
