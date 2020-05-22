import React, { Component } from "react";
import { 
  Map, 
  TileLayer, 
  CircleMarker, 
  Popup 
} from "react-leaflet";
import {
  attribution,
  tileUrl,
  defaultMapState,
} from './utils/Utils';
import DemoMapTooltip from "./DemoMapTooltip";
import "leaflet/dist/leaflet.css";

export default class DemoMap extends Component {
    state = defaultMapState;
    render() {
        return this.props.mountains ? (
        <Map
            center={[this.state.lat, this.state.lng]}
            zoom={this.state.zoom}
            style={{ width: "100%", position: "absolute", top: 0, bottom: 0, zIndex: 500, }}
            updateWhenZooming={false}
            updateWhenIdle={true}
            preferCanvas={true}
            minZoom={this.state.minZoom}
        >
            <TileLayer
                attribution={attribution}
                url={tileUrl}
            />
            {this.props.mountains.map((mountain, idx) => 
                <CircleMarker 
                    key={`mountain-${mountain.id}`}
                    color='black'
                    radius={15}
                    weight={2}
                    onClick={() => { 
                        this.setState({ activeMountain: mountain });
                    }}
                    center={mountain.point}>
                </CircleMarker>
            )}
            {this.state.activeMountain && <Popup
                position={this.state.activeMountain.point}
                onClose={() => {
                    this.setState({ activeMountain: null })
                }}
            >
                <DemoMapTooltip
                    mountain={this.state.activeMountain}
                />
            </Popup>}
        </Map>
        ) : (
            "Data is loading..."
        );
    }
}