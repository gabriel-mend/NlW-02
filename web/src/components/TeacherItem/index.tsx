import React from 'react'

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string
    user_id: number;
    whatsapp: string;
};

interface TeacherItemProps {
    teacher: Teacher;
};


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        }).then(response => {
            console.log("Conexão feita")
        })
    }
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src={teacher.avatar} 
                    alt=""
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>{teacher.cost}</strong>
                </p>
                <a onClick={createConnection} href={`https://wa.me/${teacher.whatsapp}`}> 
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato 
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;