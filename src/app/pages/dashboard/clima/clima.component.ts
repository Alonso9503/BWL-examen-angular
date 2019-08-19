import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.sass']
})
export class ClimaComponent implements OnInit {

  weather;

  constructor(private climaService: ClimaService) { }

  ngOnInit() {
      this.climaService.getWeather('veracruz', 'mx-ver')
      .subscribe(
        res => {console.log(res);
          this.weather = res},
        err => console.log(err)
        );
  }

  setLocation(cityName, countryCode) {
    console.log(cityName.value, countryCode.value);
  }

}
