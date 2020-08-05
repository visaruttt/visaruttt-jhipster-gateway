import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterGatewaySharedModule } from 'app/shared/shared.module';
import { JhipsterGatewayCoreModule } from 'app/core/core.module';
import { JhipsterGatewayAppRoutingModule } from './app-routing.module';
import { JhipsterGatewayHomeModule } from './home/home.module';
import { JhipsterGatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterGatewaySharedModule,
    JhipsterGatewayCoreModule,
    JhipsterGatewayHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterGatewayEntityModule,
    JhipsterGatewayAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterGatewayAppModule {}
