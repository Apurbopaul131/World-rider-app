import React from 'react';
import MapPic from './Map.png';

const Map = () => {
    return (
        <div>
           <img style={{height:'500px',width:'700px'}} src={MapPic} alt=""/>
        </div>
    );
};

export default Map;

















// import React, { Component } from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//     };
   
//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
   
//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };
   
//     render() {
//       return (
//         <Map google={this.props.google}
//             onClick={this.onMapClicked}>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />

//         </Map>
//       )
//     }
//   }
//   export default GoogleApiWrapper({
//     apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI')
//   })(MapContainer)




































