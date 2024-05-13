"use client";
import { XRCanvas, Hands, Controllers } from "@coconut-xr/natuerlich/defaults";
import { getInputSourceId } from "@coconut-xr/natuerlich";
import {
  useEnterXR,
  NonImmersiveCamera,
  ImmersiveSessionOrigin,
  useInputSources,
} from "@coconut-xr/natuerlich/react";
import { useState } from "react";

import SidePlatesVr from "../../components/SidePlatesVr";
import SimpleGroundVr from "../../components/GroundVr";
const sessionOptions = {
  requiredFeatures: ["local-floor"],
  optionalFeatures: ["hand-tracking"],
};

import {
  OrbitControls,
  Environment,
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";

export default function Home() {
  const enterVR = useEnterXR("immersive-vr", sessionOptions);
  const [isVRActive, setIsVRActive] = useState(false); // State tanımı eklendi

  const handleVr = () => {
    enterVR();
    setIsVRActive(true);
  };
  const [scale, setScale] = useState(1);
  const buttonStyle = {
    display: isVRActive ? "none" : "block", // VR aktifse butonu gizle, değilse göster
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={handleVr} style={buttonStyle}>
        VR Ortamını Başlat
      </button>{" "}
      {/* Butonun stiline buttonStyle ekledik */}
      <XRCanvas>
        <NonImmersiveCamera position={[0, 1.5, 4]} />
        <ImmersiveSessionOrigin position={[0, 0, 4]}>
          <Hands type="grab" />
          <Controllers type="pointer" />
        </ImmersiveSessionOrigin>
        <Environment preset="park" />
        <SimpleGroundVr />

        <SidePlatesVr />
      </XRCanvas>
    </div>
  );
}
