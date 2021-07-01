import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';


function Card() {
    return (
        <MDBCol>
            <MDBCard className='h-100'>
                        <MDBCardImage
                            src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
        </MDBCol>
    )
}

export default Card;


// <MDBCol>
//     <MDBCard className='h-100'>
//         <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
//             alt='...'
//             position='top'
//         />
//         <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>This is a short card.</MDBCardText>
//         </MDBCardBody>
//     </MDBCard>
// </MDBCol>
// <MDBCol>
//     <MDBCard className='h-100'>
//         <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
//             alt='...'
//             position='top'
//         />
//         <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//                 This is a longer card with supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//         </MDBCardBody>
//     </MDBCard>
// </MDBCol>
// <MDBCol>
//     <MDBCard className='h-100'>
//         <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
//             alt='...'
//             position='top'
//         />
//         <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//                 This is a longer card with supporting text below as a natural lead-in to additional content.
//                 This content is a little bit longer.
//             </MDBCardText>
//         </MDBCardBody>
//     </MDBCard>
// </MDBCol>