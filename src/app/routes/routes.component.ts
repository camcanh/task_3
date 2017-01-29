import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { MediaService } from './../services/media.service';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  private routes: any = [];

  constructor(private digiTransit: DigitransitService) { }

  ngOnInit() {
    this.digiTransit.getRoutes('Helsinki').subscribe((res) => {
      console.log(this.routes);
      this.routes = res.data.stops;});
  }

}
