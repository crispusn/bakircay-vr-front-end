import { useState } from "react";
import { Text, Html } from "@react-three/drei";

function LoginBar() {
  const [username, setUsername] = useState(""); // Kullanıcı adı state'i
  const [password, setPassword] = useState(""); // Şifre state'i

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Form gönderimine ilişkin işlemleri burada gerçekleştirebilirsiniz
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
  };

  return (
    <group position={[0, 1, -4]}>
      {/* Siyah arka plan */}
      <mesh position={[0, 0, 0]} scale={[14, 8, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Kullanıcı adı giriş alanı */}
      <mesh position={[0, 1, 0.2]} scale={[5, 0.5, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Html>
          {" "}
          <input
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </Html>
      </mesh>

      {/* Şifre giriş alanı */}
      <mesh position={[0, 0, 0.2]} scale={[5, 0.5, 0.2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
        <Html>
          {" "}
          <input
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              background: "transparent",
            }}
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </Html>
      </mesh>

      {/* Giriş butonu */}
      <mesh
        position={[0, -1, 0.2]}
        scale={[5, 0.5, 0.2]}
        onClick={handleSubmit}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Giriş
        </Text>
      </mesh>
    </group>
  );
}

export default LoginBar;
