import React from 'react';
import Card from "./Card";
import {MDBRow} from "mdb-react-ui-kit";


function Cards() {
    return (
        <div className="container mt-5">
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                <Card />
                <Card />
                <Card />
                <Card />
            </MDBRow>
        </div>
    );
}

export default Cards;