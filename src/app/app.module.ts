import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/article/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailArticleMvtStockComponent } from './composants/detail-article-mvt-stock/detail-article-mvt-stock.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageCltComponent } from './pages/clients/page-clt/page-clt.component';
import { PageFrsComponent } from './pages/fournisseurs/page-frs/page-frs.component';
import { NouveauClsFrsComponent } from './composants/nouveau-cls-frs/nouveau-cls-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PagesCmdCltFrsComponent } from './pages/pages-cmd-clt-frs/pages-cmd-clt-frs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    StatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailArticleMvtStockComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageCltComponent,
    PageFrsComponent,
    NouveauClsFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PagesCmdCltFrsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
