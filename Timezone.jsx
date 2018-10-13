import { MapLayer, withLeaflet } from 'react-leaflet'
import LeafletTimezone from './leaflet-timezone'

class Timezone extends MapLayer {
	createLeafletElement(props) {
		return null
	}

	updateLeafletElement(fromProps, toProps) {
		return null
	}

	componentDidMount() {
		console.log(this.props)
		const { map } = this.props.leaflet
		// map.addLayer(this.leafletElement)
		LeafletTimezone.bindPopup(function (layer) {
			return new Date().toLocaleString('en-GB', { timeZone: layer.feature.properties.tz_name1st, timeZoneName: 'short' })
		}).addTo(map)
	}

	render() {
		return null
	}
}

export default withLeaflet(Timezone)
