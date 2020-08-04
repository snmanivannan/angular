import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewslistComponent } from "../app/newslist/newslist.component";
import { NewsComponent } from "../app/news/news.component";

const routes: Routes = [
  {path:'',component: NewslistComponent},
  {path:'add',component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
