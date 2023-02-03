import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMvtstkComponent } from './pages/article/mvtstk/page-mvtstk/page-mvtstk.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { PageCltComponent } from './pages/clients/page-clt/page-clt.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageFrsComponent } from './pages/fournisseurs/page-frs/page-frs.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

const routes: Routes = [
  {
    path:'login',component: LoginComponent
  },
  {
    path: 'inscription',component: InscriptionComponent
  },
 {
    path:'',component: DashboardComponent,
    children:[
      {
        path:'statistique',component:StatistiqueComponent
      },
      {
        path:'articles',component:PageArticleComponent
      },
      {
        path:'nouvelarticle',component:NouvelArticleComponent
      },
      {
        path:'mvtstk',component:PageMvtstkComponent
      },
      {
        path:'clients',component:PageCltComponent
      },
      {
        path:'fournisseurs',component:PageFrsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
