import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styles: [`
    mgl-map {
      height: 100%;
      width: 100%;
      position:relative;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'map';
long:number;
lat:number;
 
ngOnInit() {
}

zoomout(lat:number) 
{  
    lat=-lat- -20;
    console.log(lat);
   
}

}
