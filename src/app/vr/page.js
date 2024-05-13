"use client";
import { XRCanvas, Hands, Controllers } from "@coconut-xr/natuerlich/defaults";
import { getInputSourceId } from "@coconut-xr/natuerlich";
import {
  useEnterXR,
  NonImmersiveCamera,
  ImmersiveSessionOrigin,
  useInputSources,
} from "@coconut-xr/natuerlich/react";
import { useState, useEffect } from "react";

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
  const [isVRActive, setIsVRActive] = useState(false);

  const enterVR = useEnterXR("immersive-vr", sessionOptions);

  const handleVr = () => {
    enterVR();
    setIsVRActive(true);
  };

  // Sayfa render edilmeden önce VR'e girme işlemi
  useEffect(() => {
    if (isVRActive) {
      enterVR();
    }
  }, [isVRActive]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isVRActive && <button onClick={handleVr}>Enter VR</button>}
      <XRCanvas>
        {isVRActive && (
          <>
            <NonImmersiveCamera position={[0, 1.5, 4]} />
            <ImmersiveSessionOrigin position={[0, 0, 4]}>
              <Hands type="grab" />
              <Controllers type="pointer" />
            </ImmersiveSessionOrigin>
            <Environment preset="park" />
            <SimpleGroundVr />
            <SidePlatesVr />
          </>
        )}
      </XRCanvas>
    </div>
  );
}
