import React from 'react'
import Sketch from "react-p5";
import Mappa from 'mappa-mundi';

const trackmap = () => {
    const mappa = new Mappa('Leaflet'); 
    let canvas ;
    let tmap ; 
    let countries ;
    let url = 'https://gist.githubusercontent.com/sindresorhus/1341699/raw/84704529d9ee4965df2cddc55e5f2bc3dc686950/countrycode-latlong-array.json';
    const options = {
        lat:0 , 
        lng:0 ,
        zoom:4 ,
        style:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    }

    const preload = (p5) =>{
        countries = p5.loadJSON(url);
    }
    const setup = (p5, canvasParentRef)=>{
        canvas = p5.createCanvas(window.screen.availWidth, window.screen.availHeight).parent(canvasParentRef);
        tmap = mappa.tileMap(options);
        tmap.overlay(canvas)
    }

    const draw = (p5) => {
        p5.clear();
        for(let x in countries){
            const latlon = countries[x];
            const lattopix = tmap.latLngToPixel(latlon[0] , latlon[1]);
            p5.fill(10,0,101);
            p5.ellipse(lattopix.x , lattopix.y , 10 , 10  );
        }
	};

    return <Sketch setup={setup} draw={draw} preload={preload}></Sketch>
}

export default trackmap