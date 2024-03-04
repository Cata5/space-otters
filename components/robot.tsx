import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const Model = () => {
  const draco = new DRACOLoader();
  draco.setDecoderConfig({ type: 'js' });
  draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

  const gltf = useLoader(GLTFLoader, "./robot2.glb", loader => {
    loader.setDRACOLoader(draco);
  });

  return (
    <>
      <primitive object={gltf.scene} scale={0.0075} />
    </>
  );
};

export default function Robot() {
  return (
    <div>
      <div className="globe cursor-grabbing hidden xl:grid">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, .75], fov: 25 }}>
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
