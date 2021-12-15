import firebase from "../../config/firebase";


export function addMarker(marker, addComplete) {
    // marker.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  
    firebase.firestore()
      .collection('PointsOfInterest')
      .add({
          Description: marker.Description,
          Location: marker.Location,
          Title: marker.Title,
          URL: marker.URL,
    
      })
      .then((data) => addComplete(data))
      .catch((error) => console.log(error));
  }

  export async function getMarkers(markersRetreived){

    var markerList = [];

      var snapshot = await firebase.firebase.firestore()
      .collection('PointsOfInterest')
      .orderBy('createdAt')
      .get()

      snapshot.forEach((doc) => {
        markerList.push(doc.data());
      });

      markerRetrieved(markerList);
  }