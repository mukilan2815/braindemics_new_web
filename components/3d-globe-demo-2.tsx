"use client";

import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const markers: GlobeMarker[] = [
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
];

export default function Globe3DDemoSecond() {
  return (
    <section className="globe-section">
      <div className="container">
        <div className="globe-section__inner">
          <div className="globe-section__text">
            <span className="globe-section__eyebrow">Global Reach</span>
            <h2 className="globe-section__title">
              Learning Without <span>Boundaries</span>
            </h2>
            <p className="globe-section__body">
              Braindemics brings quality early education to families across the globe. 
              From the vibrant streets of New Delhi to the shores of Sydney, 
              children everywhere deserve the best start in life.
            </p>
            <p className="globe-section__body--muted">
              Our digital-first approach and thoughtfully designed learning kits 
              make it possible to deliver consistent, research-backed early education 
              no matter where you are.
            </p>
          </div>

          <div className="globe-section__globe">
            <Globe3D
              className="globe-section__canvas"
              markers={markers}
              config={{
                atmosphereColor: "#0ea5a5",
                atmosphereIntensity: 0.5,
                atmosphereBlur: 3,
                bumpScale: 5,
                autoRotateSpeed: 0.3,
                showAtmosphere: true,
                ambientIntensity: 1.0,
                pointLightIntensity: 2.0,
              }}
              onMarkerClick={(marker) => {
                console.log("Clicked marker:", marker.label);
              }}
              onMarkerHover={(marker) => {
                if (marker) {
                  console.log("Hovering:", marker.label);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
