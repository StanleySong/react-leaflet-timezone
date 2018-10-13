# react-leaflet-timezone

React component built on top of [react-leaflet](https://github.com/PaulLeCam/react-leaflet) that integrates [Leaflet.timezones](https://github.com/dj0001/Leaflet.timezones) library.

## Install

`npm install react-leaflet-timezone`

## Getting started
You need to put this component into Map component.

```javascript
import { Map } from 'react-leaflet';
import Timezone from 'react-leaflet-timezone';

const Component = () => (
  <Map>
    <Timezone />
  </Map>
);
```

A detailed example of how to use this componenet is in the [example folder of this repo](https://github.com/StanleySong/react-leaflet-timezone/tree/master/example). To run the example,

1. Clone this repo
2. Run `npm run example`
