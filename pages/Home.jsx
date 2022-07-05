import React  from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home (props) {
    const [title, setTitle] = useState ("Title");
    return (
    <div>
        <Navbar/>
        {title}
    </div>
    )

    
}


