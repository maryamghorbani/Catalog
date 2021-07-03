import React from 'react';
import Card from "./Card";
import {MDBRow} from "mdb-react-ui-kit";
import photos from './Data/photos.json'


function Cards() {
    return (
        <div className="container mt-5">
            <h2 className="text-center"></h2>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4 mt-5'>
                {photos.map(photo => <Card/>)}
            </MDBRow>
        </div>
    );
}

export default Cards;