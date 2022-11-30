import React, {useEffect, useState} from 'react';
import CafeData from '../data/cafeData';

const { naver } = window;
const MapComponent = (props) => {
    useEffect(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
        // let markerList = [];
        // const HOME_PATH = window.HOME_PATH || '.';
        const lat = props.lat;
        const lon = props.lon;
        // const position = new naver.maps.LatLng(props.lat, props.lan);
        const position = new naver.maps.LatLng(lat, lon);
        const mapOptions = {
            center: position,
            zoom: 17,
            minZoom: 6,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
 
        const map = new naver.maps.Map(container, mapOptions);
        const marker = [];
        CafeData.forEach((data)=>{
            let markerEl = new naver.maps.Marker({
                map: map,
                id: data.name,
                // text: data.name,
                title: data.name,
                position: new naver.maps.LatLng(data.lat, data.lng)
            })
            marker.push(markerEl)
        })
 
        console.log(marker);
    },[props]);
 
    return (
        <div>
            <div id="map" style={{width:'100%', height:'545px' }}></div>
        </div>
    );
};

export default MapComponent;