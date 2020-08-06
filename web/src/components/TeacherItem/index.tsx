import React from 'react'

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars0.githubusercontent.com/u/49095200?s=460&u=27a77c43fff5eab61be02a3fedfd7db554145981&v=4" 
                    alt=""
                />
                <div>
                    <strong>Gabriel Mendonça</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /> <br /> 
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$80,00</strong>
                </p>
                <button>
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato 
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;