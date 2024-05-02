import { Form, Input, Label, Submit } from "r3f-form";
import { useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { Interactive, toggleSession } from "@react-three/xr";
import { Html } from "@react-three/drei";
import { color } from "three/examples/jsm/nodes/Nodes.js";

function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { size } = useThree();
  const aspect = size.width / size.height;
  const boxWidth = 14;
  const boxHeight = 8;

  const handleClick = async () => {
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

  return (
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
            onSelectStart={() => console.log("Username alanına tıklandı")}
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
            onSelectStart={() => console.log("Password alanına tıklandı")}
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
  );
}

export default LoginBar;
