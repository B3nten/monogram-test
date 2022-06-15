import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from './Model';


export default function Three() {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    return (
        <div className={`mx-auto max-w-[914px] aspect-square`} style={{ width: `calc(100vw - ${scrollbarWidth}px` }}>
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <Environment preset="dawn" />
            </Canvas>
        </div>
    );
}