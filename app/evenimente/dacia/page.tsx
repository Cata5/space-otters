'use client'
import { Navbar } from "@/components/navbar"


export default function Dacia() {
    return (
        <div>
            <div className="flex items-center justify-center m-auto flex-col max-w-7xl">
                <h1 className="text-5xl py-[1rem]">Vizita Dacia</h1>
                <div className=" py-[10rem] flex gap-[4rem] flex-col">
                    <h1 className="text-3xl ">Introducere</h1>
                    <p className="text-xl text-justify indent-[5rem]">Pe data de 8 noiembrie 2023, echipa noastră a avut privilegiul de a vizita Platforma Industrială Dacia de la Mioveni, o experiență care s-a dovedit
                        a fi nu doar instructivă, ci și inspirațională pentru dezvoltarea viitoare a echipei noastre.
                        În cadrul vizitei noastre, am avut oportunitatea de a prezenta inginerilor de la Dacia robotul
                        nostru și de a evidenția capacitatea sa excepțională. Ne-am bucurat să împărtășim strategiile și abilitățile
                        noastre, surprinzându-i pe ingineri prin nivelul nostru de coordonare și excelență în pregătirea pentru competițiile viitoare.
                        Interesul și impresiile pozitive ale inginerilor au fost o sursă de validare și încurajare pentru echipa noastră.
                    </p>
                </div>
            </div>
        </div>
    )
}