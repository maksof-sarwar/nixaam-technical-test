import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { NoteListComponent } from 'src/app/note-list/note-list.component';
import { RegisterComponent } from 'src/app/register/register.component';
const routes: Routes = [
  {
    path: "",
    redirectTo : 'sign-up',
  },
  {
    path: "note-list/:token",
    pathMatch: "full",
    component: NoteListComponent,
    canActivate : [AuthGuard]
  },
  {
    path: "sign-up",
    pathMatch: "full",
    component: RegisterComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
