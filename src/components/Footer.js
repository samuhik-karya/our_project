import React from 'react'

const Footer = () => {
    let footer_text_subheading = {
        color: "White",
        padding: "10px",
        paddingBottom: "40px",
        textAlign: "center"
    } 
    return (
        <>
            <div className="container-flex" style={{ backgroundColor: "#191e24" }}>
                <div className="container d-flex flex-column align-items-center">
                    <div className='footer-text-1' style={{ color: "White", padding: "25px", fontSize: "36px", fontWeight: "600", textAlign: "center",paddingTop : "30px"}}>
                        Beach Resort | Hotel Room Book
                    </div>
                    <div className='footer-text-2' style={footer_text_subheading}>
                        © 2023 BeachResort.com : All Rights Copyright Reserved To <a className='text_decoration' href="https://www.facebook.com/SamiurRahmanMukul">Samiur Rahman Mukul</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
