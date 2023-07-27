import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit,AfterViewInit {

  private map:any;

  constructor() { }

  ngAfterViewInit(): void {

    console.log('ngAfterViewinit');

  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [22.7196, 75.8577 ],
      zoom: 15

    });
  }


  ngOnInit(): void {

    this.initMap()
   console.log('ngoninit............');

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  // tileSize: 512,
  // zoomOffset: -1,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

});

const marker = L.marker([51.5, -0.09]).addTo(this.map);

const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(this.map);


const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(this.map);

tiles.addTo(this.map);



  }


}
