import { useState, useRef } from "react";
import { Text, Html } from "@react-three/drei";
import { Interactive } from "@react-three/xr";

function LoginBar() {
  const [username, setUsername] = useState(""); // Kullanıcı adı state'i
  const [password, setPassword] = useState(""); // Şifre state'i
  const usernameInputRef = useRef(null); // Kullanıcı adı input alanı referansı
  const passwordInputRef = useRef(null); // Şifre input alanı referansı

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleInputClick = (ref) => {
    // Tıklama durumunda ilgili input alanının referansına odaklan
    ref.current.focus();
    // Tıklama durumunda bir console log yap
    console.log("Input bara tıklandı!");
  };

  const handleSubmit = () => {
    // Form gönderimine ilişkin işlemleri burada gerçekleştirebilirsiniz
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
  };

  return (
    <Interactive onSelect={() => console.log("LoginBar'a tıklandı!")}>
      <group position={[0, 1, -4]}>
        {/* Siyah arka plan */}
        <mesh position={[0, 0, 0]} scale={[14, 8, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        {/* Kullanıcı adı giriş alanı */}
        <mesh
          position={[0, 1, 0.2]}
          scale={[5, 0.5, 0.2]}
          onClick={() => handleInputClick(usernameInputRef)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
          <Html>
            {" "}
            <input
              ref={usernameInputRef}
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
        <mesh
          position={[0, 0, 0.2]}
          scale={[5, 0.5, 0.2]}
          onClick={() => handleInputClick(passwordInputRef)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
          <Html>
            {" "}
            <input
              ref={passwordInputRef}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "transparent",
              }}
              type="password"
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
          <meshStandardMaterial color="red" />
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.6}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Giriş
          </Text>
        </mesh>
      </group>
    </Interactive>
  );
}

export default LoginBar;
