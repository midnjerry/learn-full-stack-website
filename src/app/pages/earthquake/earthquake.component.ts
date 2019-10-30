import { Component, OnInit } from '@angular/core';
import { latLng, LatLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-earthquake',
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.css']
})
export class EarthquakeComponent implements OnInit {

  constructor() { }

  map;
  ngOnInit() {
    
    // this.map = L.map("leaflet").setView([33.858631, -118.279602], 5);
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
  }


  optionsSpec: any = {
		layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
		zoom: 5,
		center: [ 33.858631, -118.279602 ]
	};

	// Leaflet bindings
	zoom = this.optionsSpec.zoom;
	center = latLng(this.optionsSpec.center);
	options = {
		layers: [ tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution }) ],
		zoom: this.optionsSpec.zoom,
		center: latLng(this.optionsSpec.center)
	};
}
