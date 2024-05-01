import { useTexture } from "@react-three/drei";

function SimpleGround() {
  const texture = useTexture("/gradient.png");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default SimpleGround;
