import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'stwatch',
    pathMatch : 'full' // https://naver.com/stwatch라는 곳에 redirectTo 하려면  prefix는 path까지만 맞아도 hit, full은 전체가 맞아야 hit


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
