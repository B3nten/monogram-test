import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
//@ts-ignore
export function Model(props) {
    const { viewport } = useThree();
    const group = useRef();
    useEffect(() => {
        const x = innerWidth / 2;
        const y = innerHeight / 2;
        //@ts-ignore
        function foo(e) {
            const mouseX = (e.clientX - x) / x;
            const mouseY = (e.clientY - y) / x;
            //@ts-ignore
            group.current.rotation.x = (mouseY * .3) + .6;
            //@ts-ignore
            group.current.rotation.y = (mouseX * .2) - 1;
        }
        document.addEventListener('mousemove', foo);
        return () => {
            removeEventListener('mousemove', foo);
        };
    }, [innerHeight, innerWidth]);
    //@ts-ignore
    const { nodes, materials } = useGLTF("/assets/models/Ball.glb");
    return (
        <group rotation={[.6, -1, .8]} ref={group} {...props} dispose={null}>
            <group scale={(viewport.width / 2.53)}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_primitive1.geometry}
                    material={materials.Logos}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_primitive0.geometry}
                    material={materials.Ball}
                />
            </group>
        </group>
    );
}
useGLTF.preload("/assets/models/Ball.glb");