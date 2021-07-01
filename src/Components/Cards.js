import React from 'react';
import Card from "./Card";
import {MDBRow} from "mdb-react-ui-kit";


function Cards() {
    return (
        <div className="container mt-5">
            <h2 className="text-center">جدید ترین محصولات سهند تابلو</h2>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4 mt-5'>
                <Card />
                <Card />
                <Card />
                <Card />
            </MDBRow>
        </div>
    );
}

export default Cards;