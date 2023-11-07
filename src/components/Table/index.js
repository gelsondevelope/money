


import styled from 'styled-components'
import {useEffect} from "react"
import { api } from '../Services'

const Container = styled.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 2.5rem 1rem;
        table{
            width: 100%;
            border-spacing:  0 0.5rem;
            
        }
        tr:hover{
            filter:brightness(0.9);
        }
        
        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
      
        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            &:first-child{
                color: var(--text-title);
            }
            &.deposito{
                color:var(--gren)
            }
            &.gasto{
                color:var(--red)
            }
      
        }


`

export function Table(){ 
     useEffect(()=>{
        api.get('/transitions')
        .then(response=>console.log(response.data))

    },[])
    
    return(
  <Container>
  
        <table>
         <thead>
             <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categória</th>
                <th>Data</th>
            </tr>
         </thead>
            <tbody>
                <tr>
                    <td>Gastos com o taxi</td>
                    <td className='gasto'>- $10.00 </td>
                    <td>Obrigtória</td>
                    <td>1-2-2023</td>
                </tr>
                <tr>
                    <td>Venda de computadores</td>
                    <td className='deposito'>+ $20.00 </td>
                    <td >Empreendimento</td>
                    <td>20-9-2023</td>
                </tr>
                <tr>
                    <td >Saida com amigos</td>
                    <td  className='gasto'> -$10.00 </td>
                    <td>Obrigtória</td>
                    <td>10-1-2023</td>
                </tr>
        

            </tbody>
        </table>

  </Container>)
}