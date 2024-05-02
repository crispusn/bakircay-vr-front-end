import { useTexture } from "@react-three/drei";
import FakeGlowMaterial from "./FakeGlowMaterial";

function SimpleGround() {
  const texture = useTexture("/gradient.png");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default SimpleGround;
