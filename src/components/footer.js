import React from 'react'
import '../components/robert.css'

export default function Footer(){
    return(
        <footer class="h-10 bg-grey-500">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <div className="font-semibold text-xl tracking-tight footer-title" style={{paddingLeft:"20px"}}>
                    Robert Lovin, Copyright 2022
                </div>
            </div>
        </footer>
    )
}