import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CRow,CCol,CCard,CCardBody,CCardTitle,CCardText,CButton,CContainer } from '@coreui/react';


const RequirementFE=(props)=>{
    
    const {Company,Link,role,ctc,natureofjob,opening,deadline,program}=props
            return(
                
                
                <>

               
                <CCol sm={9} style={{ marginLeft: '300px'}}>
                    <CCard >
                    <CCardBody style={{ border:'2px solid rgb(12, 71, 95)',borderRadius:'6px'
                ,color:' rgb(12, 71, 95)'}}>
                        {/* <CCardTitle  style={{ fontWeight: 'bold'}}>Special title treatment</CCardTitle>
                        <CCardText>
                        With supporting text below as a natural lead-in to additional content.
                        </CCardText> */}

                    <CRow xs={{ cols: 5 }}>
                        <CCol xs={4} style={{ marginRight: '1000px',fontWeight: 'bolder',textTransform:'uppercase'}}>
                        {Company}</CCol>
                        <CCol style={{ width:'30%'}} >{Link}</CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Role:</CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Nature Of Job:</CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Deadline:</CCol>
                        <CCol  style={{ width:'30%'}} ></CCol>
                        <CCol  style={{ fontSize:'14px'}}>{role}</CCol>
                        <CCol  style={{ fontSize:'14px'}}>{natureofjob}</CCol>
                        <CCol  style={{ fontSize:'14px'}}>{deadline}</CCol>
                        <CCol  style={{ width:'30%'}} ></CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Current CTC: </CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Openings: </CCol>
                        <CCol style={{fontWeight: 'bolder',textTransform:'capitalize'}}>Program: </CCol>
                        <CCol  style={{ width:'30%'}} ></CCol>
                        <CCol  style={{ fontSize:'14px'}}>{ctc}</CCol>
                        <CCol  style={{ fontSize:'14px'}}>{opening}</CCol>
                        <CCol  style={{ fontSize:'14px'}}>{program}</CCol>
                    </CRow>
                    </CCardBody>
                    </CCard><br></br>
                </CCol>
               
          
                
                {/* <div class='requireborder '>
                <div class='grid-container'>
                <div class="grid-item"><h2>{Company}</h2></div>
                <div class="grid-item"><h3>Role:</h3></div>
                <div class="grid-item"><h3>Nature Of Job:</h3></div>
                <div class="grid-item"><h3>Deadline:</h3> </div>
                <div class="grid-item">{Link}</div>
                <div class="grid-item1">{role}</div>
                <div class="grid-item1">{natureofjob}</div>
                <div class="grid-item">{deadline}</div>
                </div><br></br>
                <div class='grid-container'>
                <div class="grid-item2"><h2>{Company}</h2></div>
                <div class="grid-item"><h3>Current CTC:   </h3></div>
                <div class="grid-item"><h3> Openings:</h3></div>
                <div class="grid-item"><h3><pre><b>     Program:</b></pre></h3> </div>
                <div class="grid-item2">{Link}</div>
                <div class="grid-item1">{ctc}</div>
                <div class="grid-item1">{opening}</div>
                <div class="grid-item">{program}</div>
                </div> */}
                
                    
                  
                    
                
    
                

                   
                    
                
                </>
            )
}
export default RequirementFE