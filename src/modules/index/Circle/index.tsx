import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './Circle.module.css';

export function Circle({ delay = 0 }: { delay: number; }) {
    const [ref, animate] = useInView({ delay: delay, triggerOnce: true, threshold: .75 });
    const [counter, setCounter] = useState(0);
    // incrementer
    useEffect(() => {
        let timeout: undefined | ReturnType<typeof setTimeout>;
        if (counter < 100 && animate) {
            timeout = setTimeout(() => {
                setCounter(counter + 1);
            }, 5);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [counter, animate]);
    return (
        <div className="relative inline-block" ref={ref}>
            <div className='text-4xl md:text-5xl lg:text-6xl text-[#EFFFE2] font-bold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 drop-shadow-circle'>
                {counter}
            </div>
            <svg className='[transform:translateZ(0)_scale(1.25)]' width="100%" height="100%" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8" filter="url(#filter0_ddd_101_247)">
                    {/* path css & set play class when animate (inview) = true */}
                    <path className={`${styles.path} ${animate && styles.play}`} d="M275 169C275 141.861 264.591 115.756 245.917 96.0635C227.244 76.3707 201.728 64.5903 174.628 63.1496C147.527 61.7089 120.906 70.7175 100.25 88.3194C79.5935 105.921 66.4752 130.776 63.5978 157.761C60.7204 184.747 68.3031 211.809 84.7836 233.37C101.264 254.932 125.387 269.351 152.182 273.657C178.977 277.963 206.403 271.828 228.809 256.515C251.215 241.203 266.895 217.879 272.617 191.351" stroke="#EFFFE2" stroke-linecap="round" stroke-width="4" />
                </g>
                <defs>
                    <filter id="filter0_ddd_101_247" x="0" y="-1.90735e-06" width="338" height="338.001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="30.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.325621 0 0 0 0 0.983333 0 0 0 0 0.163889 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_247" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="21" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.9125 0 0 0 0 0.880867 0 0 0 0 0.121667 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_101_247" result="effect2_dropShadow_101_247" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.32549 0 0 0 0 0.984314 0 0 0 0 0.164706 0 0 0 1 0" />
                        <feBlend mode="normal" in2="effect2_dropShadow_101_247" result="effect3_dropShadow_101_247" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_101_247" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );

}

