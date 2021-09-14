import React, { useEffect, useRef, useState } from 'react'
import { useSprings, animated } from 'react-spring'
import { useGesture, useDrag } from 'react-use-gesture'
import { isMobile, isMobileOnly } from 'react-device-detect';
import Image from 'next/image'
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function ProjectContent({ tittleList, selectedCoverHook, setTittleHovered, tittleSelected, setTittleSelected }) {
    return(
        <div className="flex flex-row w-full h-full">
            <div className="flex flex-col w-16 h-full justify-center items-center">
                <IoArrowBackCircleOutline
                    className=" w-10 h-10 text-yellow-300 hover:text-yellow-500 cursor-pointer"
                    onClick={ () => setTittleSelected(undefined)}
                />
            </div>

            <div className="flex flex-row w-full h-full bg-gray-900 bg-opacity-50">
                <div className=" flex flex-col w-1/4 h-full bg-yellow-900 bg-opacity-10 p-4 items-center justify-center">
                    <div className=" w-9/12">
                        <Image 
                            src={`/covers/cover_${tittleList[tittleSelected].tittle.replace(/ /g, '')}.jpg`}
                            width={5}
                            height={7}
                            quality={40}
                            layout="responsive"
                            alt={`Cover of ${tittleList[tittleSelected].tittle.replace(/ /g, '')}`}
                        />
                    </div>

                    <div 
                        className="flex flex-col w-full px-6 font-simplifica tracking-wide mt-5 text-white items-center justify-center">
                        <p className=" w-full text-4xl text-center">
                            { tittleList[tittleSelected].tittle }
                        </p>
                        <p className=" w-full text-2xl mt-4 text-left">
                            Year: 2018
                        </p>
                        <p className=" w-full text-2xl text-left">
                            Role: Compositor / IT support / 
                        </p>
                        <p className=" w-full text-2xl text-left">
                            Software use: After Effects, Maya
                        </p>
                        <p className=" w-full text-2xl text-left">
                            Studio/Company: Offworld VFX
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}