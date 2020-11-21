import React from 'react'
import Card from 'react-bootstrap/Card'
import footer from '../images/footer.png'
import './Footer.scss'

export default function Footer() {
    return (
        <div>
        <Card className="footerCard">
            <Card.Img src={footer} alt="footer" style={{border: 'none'}}/>
        </Card>
        </div>
    )
}
