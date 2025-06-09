import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { LatLng } from 'leaflet'

interface LocationSelectorProps {
  onSelect: (value: string) => void
}

function LocationSelector({ onSelect }: LocationSelectorProps) {
  const [position, setPosition] = useState<LatLng | null>(null)

  useMapEvents({
    async click(e) {
      const latlng = e.latlng
      setPosition(latlng)

      // 🛰 Reverse geocode so‘rovi (Nominatim)
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`
        )
        const data = await response.json()
        const address = data.display_name || `Lat: ${latlng.lat}, Lng: ${latlng.lng}`
        onSelect(address)
      } catch (error) {
        console.error("Reverse geocoding xatosi:", error)
        onSelect(`Lat: ${latlng.lat}, Lng: ${latlng.lng}`)
      }
    },
  })

  return position ? <Marker position={position} /> : null
}
interface LeafletMapProps {
  onSelect: (value: string) => void
}

export function LeafletMap({ onSelect }: LeafletMapProps) {
  return (
    <MapContainer
      center={[41.3111, 69.2797]}
      zoom={10}
      scrollWheelZoom={true}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationSelector onSelect={onSelect} />
    </MapContainer>
  )
}
