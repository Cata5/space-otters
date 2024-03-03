import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./robot2.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};

export default function Robot() {
  return (
    <div>
      <div className="globe">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, .75], fov: 25 }}> {/* Decreased Z-coordinate for closer view */}
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  )
}
