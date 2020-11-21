import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import TimeInput from "../components/TimeInput"
import { Container, Row, Col } from 'react-bootstrap'
import { GlobalStyle, MainSection, FooterSection, NavbarSection, PageContainer } from './style'

export default function ProjectDetail() {
    return (
        <>  
            <Container>
            <GlobalStyle/>
            <PageContainer>
                <NavbarSection>
                    <Navigation />
                </NavbarSection>
                    <MainSection>
                    <h3>this is the ProjectDetail</h3>
                    <TimeInput />
                    </MainSection>
                    <FooterSection>
                    <Footer />
                    </FooterSection>
                </PageContainer>
            </Container>
        </>
    )
}
