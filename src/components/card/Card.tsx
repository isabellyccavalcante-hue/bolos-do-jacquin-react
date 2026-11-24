import { Link } from 'react-router-dom'
import icones from '../../assets/icones/user.svg'
import icones2 from '../../assets/icones/star.svg'
import './Card.css'


type CardProps = {
    id: number;
    chocolat: string;
    nome: string;
    descrição: string;
    valor: number;
    quantidadeAvaliações: number;
    nota: number;
}


function Card({id, chocolat, nome, descrição, valor, quantidadeAvaliações, nota} : CardProps) {
    return(
        <article className="prod_card">
        <figure>
          <img
            src={chocolat}
            alt="foto do produto"
          />
        </figure>
        <h2>
          <Link to={`/produto/${id}`}>{nome}</Link>
        </h2>
        <p className="card_desc">
         {descrição}
        </p>
        <p className="card_rodape">
          <data value={valor}>R$ {valor} / kg</data>
          {/* <span className="card_av">
            <img src={icones} alt="icone de usuarios" />
            <data value={quantidadeAvaliações}>{quantidadeAvaliações}</data>
            <img src={icones2} alt="icone de estrela" />
            <data value={nota}>{nota}</data>
          </span> */}
        </p>
      </article>
    )
}

export  default Card