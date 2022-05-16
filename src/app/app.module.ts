import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HowtohelpComponent } from './pages/howtohelp/howtohelp.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SafePipe  } from './pipes/safe-pipe.pipe';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HowtohelpComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule, ButtonModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
