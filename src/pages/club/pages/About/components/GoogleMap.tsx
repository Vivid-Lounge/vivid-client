import React, { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface Props {
  mapDisplay?: boolean;
  placeId: string; // ID-ul locației
}

const GoogleMaps: React.FC<Props> = ({ mapDisplay = false, placeId }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAKIU-B44IktnFv2eJTRzj3Gw4R_a9b_tM", // Cheia API corectă
    libraries: ["places"],
  });

  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (!isLoaded || !placeId) return;

    const service = new google.maps.places.PlacesService(document.createElement("div"));

    service.getDetails(
      {
        placeId: placeId,
        fields: ["geometry"], // Obține coordonatele locației
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
          const newLocation = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          console.log("Location set:", newLocation); // Verifică locația
          setLocation(newLocation);
        } else {
          console.error("Error fetching place details:", status);
        }
      }
    );
  }, [isLoaded, placeId]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Grid2
      container
      sx={{
        position: "fixed",
        height: mapDisplay ? "100dvh" : "0%",
        width: mapDisplay ? "100vw" : "0%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease-in-out",
        padding: {
          xs: '16px',
          md: '16px 0'
      }
      }}
    >
      <Grid2
        container
        size={{xs: 12, md: 10}}
        sx={{
          height: '80%',
        }}
      >

      {location && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={location}
          zoom={19}
        >
          {/* Marker simplu, fără personalizare */}
          <Marker
            position={location}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: new google.maps.Size(20, 20),
            }}
          />
        </GoogleMap>
      )}
      </Grid2>
    </Grid2>
  );
};

export default GoogleMaps;