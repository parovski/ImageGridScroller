import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

// import service path
import { ImggridService } from './_services/imggrid.service';

// import path HttpClientModule, HttpClientJsonpModule from API calls
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// import path NgbModule for material design and tooltip functionality
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import routes path
import { AppRoutes } from './app.routing';


@NgModule({
   declarations: [  // declare all the components here
      AppComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      // define HttpClientModule, HttpClientJsonpModule from API calls here
      HttpClientModule,
      HttpClientJsonpModule,
      NgbModule,  // define NgbModule for material design and tooltip functionality
      AppRoutes  // import routes
   ],
   providers: [
     // define service in providers (always)
      ImggridService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
