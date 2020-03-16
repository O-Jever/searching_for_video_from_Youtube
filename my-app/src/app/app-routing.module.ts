import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes =[
  { 
    path: '', 
    component: AppComponent 
  },
  { 
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule) 
  },
  { 
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule) 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
