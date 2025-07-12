import React, { useState, useEffect } from 'react'

export default function Comp6() {

    useEffect(() => {
        console.log("useeffect called")

        return () => {
            console.log("its called when its unmounted")
        }

    })
    return (
        <div>
            <h1>Unmounted useeffect</h1>

        </div>
    )
}
