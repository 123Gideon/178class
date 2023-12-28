var latitude=38.76222363928596
var longtitude= -77.16112544232764

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var googleMap=new mapboxgl.Map({
    container:"map",
    style:`mapbox://styles/mapbox/streets-v12`,
    center:[longtitude,latitude],
    zoom:16
})

googleMap.addControl(
    new mapboxgl.GeolocateControl({
        positiveOptions:{
            enableHighAccuracy:true


        },
        trackUserLocation:true,
        ShowUserLocation:true
    })
)

googleMap.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)