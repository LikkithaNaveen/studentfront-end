import React from 'react'
import { CRow,CCol,CCard,CCardBody,CCardTitle,CCardText,CButton,CContainer } from '@coreui/react';

const Reference = () => {
  return (
    <div>
         <h1 class='headingtaskass'>Study Material </h1><br></br>
        <CRow>
            <CCol sm={4} style={{ marginLeft: '250px',background:'pink',marginTop: '50px',borderRadius:'15px'}}>
                <CCard>
                <CCardBody style={{ background:'pink'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>HTML</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    The language for building web pages
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/html/default.asp">Learn HTML</CButton>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol sm={4} style={{ marginLeft: '100px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'}}>
                <CCard>
                <CCardBody style={{ background:'#ffeead'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>CSS</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    The language for styling web pages
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/css/default.asp">Learn CSS</CButton>
                </CCardBody>
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '250px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'}}>
                <CCard>
                <CCardBody style={{ background:'lightgrey'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>Python</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    A popular programming language
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/python/default.asp">Learn Python</CButton>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol sm={4} style={{ marginLeft: '100px',marginTop: '50px',borderRadius:'15px',background:'#ADD8E6'}}>
                <CCard>
                <CCardBody style={{ background:'#ADD8E6'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>SQL</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    A language for accessing databases
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/sql/default.asp">Learn SQL</CButton>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol sm={4} style={{ marginLeft: '250px',marginTop: '50px',borderRadius:'15px',background:'#B0E0E6'}}>
                <CCard>
                <CCardBody style={{ background:'#B0E0E6'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>PHP</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    A web server programming language
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/php/default.asp">Learn PHP</CButton>
                </CCardBody>
                </CCard>
            </CCol>
            <CCol sm={4} style={{ marginLeft: '100px',marginTop: '50px',borderRadius:'15px',background:'#D8BFD8'}}>
                <CCard>
                <CCardBody style={{ background:'#D8BFD8'}}>
                    <CCardTitle style={{ fontWeight:'bolder',textAlign:'center',
                color:'black',borderRadius:'10px',marginLeft:'90px',marginRight:'90px',height:'30px'}}>jQuery</CCardTitle>
                    < CCardText style={{ textAlign:'center'}}>
                    A JS library for developing web pages
                    </CCardText>
                    <CButton color="primary" style={{ background:'green',marginLeft:'40%',borderRadius:'10px',border:'1px solid green'}}
                     href ="https://www.w3schools.com/jquery/default.asp">Learn jQuery</CButton>
                </CCardBody>
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '340px',marginTop: '50px',borderRadius:'15px',background:'#FFC0CB'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'#FFC0CB',padding:'10px',border:'1px solid #FFC0CB'}}>
                
                    <CButton color="primary" style={{ background:'#FFC0CB',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #FFC0CB',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/c/index.php">C</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '60px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'#ffeead',padding:'10px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/cs/index.php">C++</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '290px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'lightgrey',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/r/default.asp">R</CButton>
               
                </CCard>
            </CCol>
        
            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#ADD8E6'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ADD8E6',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'#ADD8E6',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ADD8E6',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/kotlin/index.php">Kotlin</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#8ca3a3'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#8ca3a3',padding:'20px',border:'1px solid #8ca3a3'}}>
                
                    <CButton color="primary" style={{ background:'#8ca3a3',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #8ca3a3',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/nodejs/default.asp">Node js</CButton>
               
                </CCard>
            </CCol>
            <CCol sm={2} style={{ marginLeft: '40px',marginTop: '50px',borderRadius:'15px',background:'pink'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'pink',padding:'20px',border:'1px solid pink'}}>
                
                    <CButton color="primary" style={{ background:'pink',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid pink',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/react/default.asp">React js</CButton>
               
                </CCard>
            </CCol>


            <CCol sm={2} style={{ marginLeft: '290px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ffeead',padding:'20px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/js/js_json.asp">JSON</CButton>
               
                </CCard>
            </CCol>
        
            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'lightgrey',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/vue/index.php">Vue</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#ADD8E6'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ADD8E6',padding:'20px',border:'1px solid #ADD8E6'}}>
                
                    <CButton color="primary" style={{ background:'#ADD8E6',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ADD8E6',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/mysql/default.asp">MySQL</CButton>
               
                </CCard>
            </CCol>
            <CCol sm={2} style={{ marginLeft: '40px',marginTop: '50px',borderRadius:'15px',background:'#8ca3a3'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#8ca3a3',padding:'20px',border:'1px solid #8ca3a3'}}>
                
                    <CButton color="primary" style={{ background:'#8ca3a3',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #8ca3a3',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/xml/default.asp">XML</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '280px',marginTop: '50px',borderRadius:'15px',background:'pink'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'pink',padding:'20px',border:'1px solid pink'}}>
                
                    <CButton color="primary" style={{ background:'pink',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid pink',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/sass/default.php">Sass</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '60px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ffeead',padding:'20px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/icons/default.asp">Icons</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'lightgrey',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/css/css_rwd_intro.asp">RWD</CButton>
               
                </CCard>
                </CCol>

                <CCol sm={2} style={{ marginLeft: '40px',marginTop: '50px',borderRadius:'15px',background:'#ADD8E6'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ADD8E6',padding:'20px',border:'1px solid #ADD8E6'}}>
                
                    <CButton color="primary" style={{ background:'#ADD8E6',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ADD8E6',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/graphics/default.asp">Graphics</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '280px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'lightgrey',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/python/pandas/default.asp">Pandas</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '60px',marginTop: '50px',borderRadius:'15px',background:'pink'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'pink',padding:'20px',border:'1px solid pink'}}>
                
                    <CButton color="primary" style={{ background:'pink',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid pink',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/python/scipy/index.php">SciPY</CButton>
               
                </CCard>
            </CCol>


            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#8ca3a3'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#8ca3a3',padding:'20px',border:'1px solid #8ca3a3'}}>
                
                    <CButton color="primary" style={{ background:'#8ca3a3',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #8ca3a3',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/asp/default.asp">ASP</CButton>
               
                </CCard>
            </CCol>


            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ffeead',padding:'20px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '10px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/python/pandas/default.asp">Angular JS</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '270px',marginTop: '50px',borderRadius:'15px',background:'pink'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'pink',padding:'20px',border:'1px solid pink'}}>
                
                    <CButton color="primary" style={{ background:'pink',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid pink',marginRight: '30px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/mongodb/index.php">MongoDB</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#ffeead',padding:'20px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/statistics/index.php">Statics</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '70px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'lightgrey',padding:'20px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '10px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/typescript/index.php">TypeScript</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={2} style={{ marginLeft: '50px',marginTop: '50px',borderRadius:'15px',background:'#8ca3a3'
        ,width:'15%',padding:'10px'}}>
                <CCard style={{background:'#8ca3a3',padding:'20px',border:'1px solid #8ca3a3'}}>
                
                    <CButton color="primary" style={{ background:'#8ca3a3',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #8ca3a3',marginRight: '40px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/django/index.php">Django</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '330px',marginTop: '50px',borderRadius:'15px',background:'#FFC0CB'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'#FFC0CB',padding:'10px',border:'1px solid #FFC0CB'}}>
                
                    <CButton color="primary" style={{ background:'#FFC0CB',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #FFC0CB',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/excel/index.php">Excel</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '60px',marginTop: '50px',borderRadius:'15px',background:'#ffeead'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'#ffeead',padding:'10px',border:'1px solid #ffeead'}}>
                
                    <CButton color="primary" style={{ background:'#ffeead',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #ffeead',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/dsa/index.php">DSA-Data Structures and Algorithms</CButton>
               
                </CCard>
            </CCol>


            <CCol sm={4} style={{ marginLeft: '330px',marginTop: '50px',borderRadius:'15px',background:'lightgrey'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'lightgrey',padding:'10px',border:'1px solid lightgrey'}}>
                
                    <CButton color="primary" style={{ background:'lightgrey',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid lightgrey',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/python/python_ml_getting_started.asp">Machine Learning</CButton>
               
                </CCard>
            </CCol>

            <CCol sm={4} style={{ marginLeft: '60px',marginTop: '50px',borderRadius:'15px',background:'#8ca3a3'
        ,width:'28%',padding:'30px'}}>
                <CCard style={{background:'#8ca3a3',padding:'10px',border:'1px solid #8ca3a3'}}>
                
                    <CButton color="primary" style={{ background:'#8ca3a3',marginLeft:'20%',borderRadius:'10px'
                    ,border:'1px solid #8ca3a3',marginRight: '100px',color:'black',fontWeight:'bolder'}}
                     href ="https://www.w3schools.com/ai/default.asp">Artificial intelligence</CButton>
               
                </CCard>
            </CCol>
            
            </CRow>
    </div>
  )
}

export default Reference