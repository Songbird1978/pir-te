import React from "react";
//import { Link } from "react-router-dom";
import "./mxnifesto.css";
import '../../index.css';
import Paper from '@mui/material/Paper';
//import Container from '@mui/material/Container';


function Mxnifesto() {
    return (
        
            <Paper className="mxnifesto" elevation={10} sx={{ mode: 'dark' }}>
                <h1 className="title">Mxnifesto</h1>
                <p className="manifestoParagraph">{

`
P!R@T LAB creates for change through satirical socio-political art.

A change in perception through multimedia subversions of various kinds.

A change in raising money for worthy solutions and problem solvers.

A change that is collectively empowering and collaborative in nature.

A change toward a clearer state of awareness both internal and external.

A change in the cultural fear of politics and as a form of resistance.

------------------------------


In a world falling apart economically, politically and ecologically, we are faced with catastrophic existential consequences whilst led by a corrupted political class in bed with the very multi-national corporations who continue to cause most globalised issues. The controlled mainstream media follow the orders of censorship by omission and conversely serve as a propaganda machine. Any serious journalists are ousted and censorship is becoming commonplace, especially on entirely coopted social media platforms. The space to be critical is also closing in fast on academic institutions and governing bodies. There is a space somewhere in art to be critical still, so following the long standing tradition of satirical political cartoons P!R@T LAB hopes to provide a contemporary sharp edge.



`}

                </p>

            </Paper>
     
    );
}

export default Mxnifesto;