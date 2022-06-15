import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from './Model';


export default function Three() {

    return (
        <div className='mx-auto w-full max-w-[914px] aspect-square'>
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    rotateSpeed={.1}
                    mouseButtons={{ LEFT: null }}
                    maxPolarAngle={1.7}
                    minPolarAngle={.9}
                    maxAzimuthAngle={Math.PI / 4}
                    minAzimuthAngle={-Math.PI / 8}
                />
                <Environment preset="dawn" />
            </Canvas>
        </div>
    );
}