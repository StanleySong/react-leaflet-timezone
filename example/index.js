import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Timezone from '../Timezone';


class Example extends Component {
  render() {
    return (
      <div>
        <Map
          className="map"
          center={[20.5937, 78.9629]}
          zoom={2}
          doubleClickZoom={false}
        >
          <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors &copy; <a href=&quot;https://carto.com/attribution/&quot;>CARTO</a>"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          <Timezone />
        </Map>
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));
