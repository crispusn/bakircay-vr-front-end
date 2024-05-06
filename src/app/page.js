"use client";
import * as THREE from "three";
import LoginBar from "../components/LoginBar";
import React, { useState } from "react";
import { Button, Card } from "@react-three/uikit-apfel";
import {
  VRButton,
  XR,
  Controllers,
  useXR,
  useTeleportation,
} from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import Image from "next/image";
import { Form, Input, Label, Submit } from "r3f-form";
import { Interactive, toggleSession } from "@react-three/xr";
import { Html } from "@react-three/drei";
import SidePlatesVr from "../components/SidePlatesVr";
import SimpleGround from "../components/Ground";
import SidePlates from "../components/SidePlates";
import { XrUi, Layer } from "react-xr-ui";
import SimpleGroundVr from "../components/GroundVr";
import { Fullscreen, Container, Text } from "@react-three/uikit";

export default function Home() {
  const [isVRActive, setIsVRActive] = useState(false);
  const [isTeleportActive, setIsTeleportActive] = useState(false);

  // const handleVRButtonClick = () => {
  //   setIsVRActive(true);
  // };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { size } = useThree();
  // const aspect = size.width / size.height;
  // const boxWidth = 14;
  // const boxHeight = 8;

  const handleClick = async () => {
    setIsVRActive(!isVRActive);
    const session = await toggleSession("immersive-vr");
    if (session) {
      console.log("VR session başlatıldı!");
    } else {
      console.log("VR session sonlandırıldı!");
    }
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

  const formWidth = 6;
  const formHeight = 2.5;

  const formPosX = -formWidth / 2;
  const formPosY = formHeight / 2 - 0.5;

  const [inputText, setInputText] = useState("Initial content");

  function handleOnChange(e) {
    setInputText(e.target.value);
  }

  return (
    <>
      {isVRActive ? (
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onCreated={({ gl, scene, camera, player }) => {
            gl.setSize(window.innerWidth, window.innerHeight);
            scene.background = new THREE.Color(0x000000);
            scene.fog = new THREE.Fog(0x000000, 0, 20);
            camera.position.set(0, 3, -4);
          }}
        >
          <XR>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} position={[5, 5, 5]} />
            <SimpleGroundVr />
            <OrbitControls />
            <Environment preset="park" />
            <Controllers />
            <SidePlatesVr />
          </XR>
        </Canvas>
      ) : (
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <XR>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} position={[5, 5, 5]} />
            <SimpleGround />
            <OrbitControls />
            <Environment preset="park" />
            <Controllers />
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
                  <Interactive
                    onSelectStart={() =>
                      console.log("Username alanına tıklandı")
                    }
                  >
                    <Input
                      selectionColor={"white"}
                      name="username"
                      position={[1, 0.2, 0]}
                      width={3}
                      height={0.5}
                      backgroundColor={"white"}
                      onChange={handleUsernameChange}
                    />
                  </Interactive>
                </group>

                <group>
                  <Label
                    text="Şifre"
                    fontSize={0.1}
                    position={[-1, -0.25, 0]}
                    color="white"
                  />
                  <Interactive
                    onSelectStart={() =>
                      console.log("Password alanına tıklandı")
                    }
                  >
                    <Input
                      name="password"
                      type="password"
                      position={[1, -0.2, 0]}
                      width={3}
                      height={0.5}
                      backgroundColor={"white"}
                      onChange={handlePasswordChange}
                    />
                  </Interactive>
                </group>
                <Interactive onSelectStart={handleClick}>
                  <Html
                    position={[0, -0.6, 0]} // Yeni pozisyon
                    width={6} // Genişlik ayarı
                    height={0.2}
                    rotation={[0, Math.PI, 0]}
                    fontSize={20}
                    color="red"
                  >
                    <button
                      // style={{
                      //   color: "white",
                      //   backgroundColor: "#OOA5B5",
                      //   border: "2px solid #00A5B5",
                      //   borderRadius: "50px",
                      //   padding: "10px 30px",
                      // }}
                      className="btn"
                      onClick={handleClick}
                    >
                      Giriş Yap
                    </button>
                  </Html>
                </Interactive>
              </Form>
            </group>

            <SidePlates />
          </XR>
        </Canvas>
      )}
    </>
  );
}

function Scene() {
  return (
    <group position={[0, 1, -1.88]}>
      <Layer
        width={1}
        height={1}
        backgroundColor="crimson"
        borderRadius={0.1}
        borderWidth={0.02}
        borderColor="#222222"
      />
    </group>
  );
}
