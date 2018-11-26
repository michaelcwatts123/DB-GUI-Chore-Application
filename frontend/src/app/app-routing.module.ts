import { AuthGuardService } from './../services/auth/auth-guard.service';
import { ViewAllTasksComponent } from './tasks/view-all-tasks/view-all-tasks.component';
import { LoginComponent } from './login/login.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { MembersComponent } from './members/containers/members.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/containers/parent.component';

const routes: Routes = [
  { path: 'family', component: ParentComponent, canActivate: [AuthGuardService] },
  { path: 'new-account', component: NewaccountComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'family/members', component: MembersComponent, canActivate: [AuthGuardService] },
  { path: 'family/tasks', component: ViewAllTasksComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
