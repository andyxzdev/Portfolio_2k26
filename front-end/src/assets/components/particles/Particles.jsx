import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();

  // useMemo evita recriar as partículas a cada render
  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  // 🔥 ANIMAÇÃO ACONTECENDO AQUI
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
