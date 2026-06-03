import s from './card.module.css'

export const Card = (props) => {
    return(
        <div key={props.unico}>
            <img src={props.imagem} alt={props.nome}/>
            <h4>Name: {props.nome}</h4>
            <p>Ki: {props.ki}</p>
            <p>Race: {props.race}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}