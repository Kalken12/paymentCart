import React from 'react'

export default function Button({ text }) {
    return (
        <div
            style={{
                background: "black",
                height: "40px",
                color: "white",
                width: "120px",
                fontSize: "18px",
                padding: "10px",
                boxSizing: "border-box",
                margin:"auto"
            }}
        >
            {text}

        </div>

    )
}
