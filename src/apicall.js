import React, { useEffect, useState } from "react";



export default function Apicall() {

    const [abc, setAbc] = useState([])

    useEffect(() => {
        const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const value = data.then((item => item.json()))
        value.then((apidata => setAbc(apidata)))


    }, [])

    console.log(abc, "work")



    return (
        abc.map((item,i) => {
            return(
            <div className="box" key={i}>
                <p><b>Title:</b>{item.title}</p>
                <p><b>Body:</b>{item.body}</p>
            </div>
            )
        })
        )
    }