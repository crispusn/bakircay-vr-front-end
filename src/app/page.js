"use client";
import Link from "next/link";

import { XRCanvas, Hands, Controllers } from "@coconut-xr/natuerlich/defaults";
import { getInputSourceId } from "@coconut-xr/natuerlich";
import {
  useEnterXR,
  NonImmersiveCamera,
  ImmersiveSessionOrigin,
  useInputSources,
} from "@coconut-xr/natuerlich/react";
import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import SimpleGround from "../components/Ground";
import SidePlatesVr from "../components/SidePlatesVr";
import SimpleGroundVr from "../components/GroundVr";
import { Form, Input, Label, Submit } from "r3f-form";
import { Html } from "@react-three/drei";
import SidePlates from "../components/SidePlates";

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
  const [isVRActive, setIsVRActive] = useState(false);
  const handleVr = () => {
    enterVR();
    setIsVRActive(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log("Username:", event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("Password:", event.target.value);
  };

  const handleSubmit = () => {
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
    console.log("Login butonuna tıklandı!");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formWidth = 6;
  const formHeight = 2.5;

  const formPosX = -formWidth / 2;
  const formPosY = formHeight / 2 - 0.5;

  const [inputText, setInputText] = useState("Initial content");

  function handleOnChange(e) {
    setInputText(e.target.value);
  }
  const [scale, setScale] = useState(1);
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} position={[5, 5, 5]} />
        <SimpleGround />
        <OrbitControls />
        <Environment preset="park" />
        {/* <LoginBar /> */}
        <group position={[-1, 0, 2]}>
          <Form position={[formPosX, formPosY, 0]} onSubmit={handleSubmit}>
            <group>
              <Label
                fontSize={0.1}
                strokeOpacity={1}
                text="Kullanıcı Adı"
                position={[-1, 0.15, 0]}
                color="white"
              />

              <Input
                selectionColor={"white"}
                name="username"
                position={[1, 0.2, 0]}
                width={3}
                height={0.5}
                backgroundColor={"white"}
                onChange={handleUsernameChange}
              />
            </group>

            <group>
              <Label
                text="Şifre"
                fontSize={0.1}
                position={[-1, -0.25, 0]}
                color="white"
              />

              <Input
                name="password"
                type="password"
                position={[1, -0.2, 0]}
                width={3}
                height={0.5}
                backgroundColor={"white"}
                onChange={handlePasswordChange}
              />
            </group>
            <Html
              position={[0, -0.6, 0]} // Yeni pozisyon
              width={6} // Genişlik ayarı
              height={0.2}
              rotation={[0, Math.PI, 0]}
              fontSize={20}
              color="red"
            >
              <Link className="btn" href="/vr">
                Giriş Yap
              </Link>
            </Html>
          </Form>
        </group>

        <SidePlates />
      </Canvas>
    </>
  );
}
