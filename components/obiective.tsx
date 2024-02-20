'use client'
import React from 'react'
import { Card, CardBody } from "@nextui-org/react";

export default function Obiective() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center max-w-7xl overflow-hidden mx-4 ">
            <h1 className="text-4xl my-4 font-bold">Obiective</h1>
            <Card className='px-[4.5rem]'>
                <CardBody className=''>
                <h2>
                <ul className="list-disc pl-3 [&>li]:text-xl">
                    <li className="mb-3">Avem un robot capabil care:
                        <ul className="list-inside list-disc ml-4 [&>*]:font-normal [&>*]:text-medium [&>*]:mb-2">
                            <li>este agil, astfel încât să optimizăm cât mai mult timpul necesar punctării unui pixel;</li>
                            <li>îndeplinește cele trei componente principale ale misiunii din acest sezon (cățărare, aruncarea dronei și punctarea pixelilor);</li>
                            <li>e performant în autonomie.</li>
                        </ul>
                    </li>
                    <li className="mb-3">Participăm la trei League Meets.</li>
                    <li className="mb-3">Organizăm primul Meet în județul Argeș.</li>
                    <li className="mb-3">Atragem noi sponsori.</li>
                    <li className="mb-3">Să fim cât mai activi pe social media, împărtășindu-ne progresul.</li>
                    <li className="mb-3">Câștigăm Think Award la Etapa Regională.</li>
                    <li className="mb-3">Ne calificăm la Etapa Națională BRD FIRST® Tech Challenge România.</li>
                    <li className="mb-3">Comunicăm și colaborăm eficient, punând succesul echipei pe primul loc.</li>
                    <li className="mb-3">Să ne simțim cât mai bine.</li>
                    <li className="mb-3">Ne dezvoltăm abilitățile de:
                        <ul className="list-inside list-decimal ml-4 [&>*]:text-medium [&>*]:mb-2">
                            <li>Programare orientată pe obiecte și Java;</li>
                            <li>Proiectare și imprimare 3D;</li>
                            <li>Inginerie aplicată;</li>
                            <li>Marketing și PR;</li>
                            <li>Event Planning;</li>
                            <li>Design și grafică;</li>
                            <li>Comunicare.</li>
                        </ul>
                    </li>
                </ul>
            </h2>
                </CardBody>
            </Card>
            
        </div>

    )
}