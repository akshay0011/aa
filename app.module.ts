import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYWNjaGF5YSIsImEiOiJjanc3N3JhMWkyYzJpM3lxcHF2ampndzB4In0.pdufIq-48eBCK1w-rrpLWg', 
      geocoderAccessToken: 'pk.eyJ1IjoiYWNjaGF5YSIsImEiOiJjanc3N3JhMWkyYzJpM3lxcHF2ampndzB4In0.pdufIq-48eBCK1w-rrpLWg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
