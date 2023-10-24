//import { weatherDatas } from './../../../../models/interfaces/weatherDatas';
import { weatherDatas } from 'src/app/models/interfaces/weatherDatas';
import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: []
})
export class WheaterCardComponent {
  @Input() weatherDatasInput!: weatherDatas;

  // DADOS DA PREVISÃO DO TEMPO RECEBIDOS PELO COMPONENTE PAI
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
