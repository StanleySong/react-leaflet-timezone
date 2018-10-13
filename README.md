# react-leaflet-timezone

React component built on top of [react-leaflet](https://github.com/PaulLeCam/react-leaflet) that integrates [Leaflet.timezones](https://github.com/dj0001/Leaflet.timezones) library.

![image http://forum.sixbays.com/assets/images/2-mZmsaxLCBluLtw3S.png](http://forum.sixbays.com/assets/images/2-mZmsaxLCBluLtw3S.png)

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

## License

MIT License

Copyright (c) 2018 Stanley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
