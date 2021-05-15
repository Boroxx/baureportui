import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";



function TopBauModule(props) {

    const handleListClick = (item)=>{
        console.log(item);
       
    };
    const bauModulListe = [{bauModulName:"Gehwegabsenkung", id : 1, text: "Falls Sie eine Gehwegabsenkung brauchen sind Sie hier genau richtig."}]
    
    return (
        
         <Container className="bg-light rounded p-3">
            
            <h2 className="">
                Top Baumodule 
            </h2>

            <ListGroup >

                {bauModulListe.map((item,key) => {
                    return <Link to={`/baumodul/${item.id}`}><ListGroup.Item key={key} action variant="secondary" >{item.bauModulName}</ListGroup.Item></Link>;
                })}
               
            </ListGroup>


         
                
            
         </Container>
    )
}

export default TopBauModule
