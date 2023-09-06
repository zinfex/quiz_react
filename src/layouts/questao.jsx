import React, { useState } from "react";


const questoes = [
    {
        pergunta: 'Qual é a capital da França?',
        opcoes: ['Madri', 'Paris', 'Berlim', 'Roma'],
        correta: 'Paris',
    },
    {
        pergunta: 'Qual é a montanha mais alta do mundo?',
        opcoes: ['Monte Chimborazo','Pico da Neblina', 'Monte Everest', 'Dhaulagiri'],
        correta: 'Monte Everest'
    },
    {
        pergunta: 'Quem foi a primeira pessoa a viajar no Espaço?',
        opcoes: ['Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong', 'Marcos Pontes'],
        correta: 'Yuri Gagarin'
    },
    {
        pergunta: 'De onde é a invenção do chuveiro elétrico?',
        opcoes: ['França', 'Brasil', 'Itália', 'Inglaterra'],
        correta: 'Brasil'
    },
    {
        pergunta: 'Qual o número mínimo de jogadores em cada time numa partida de futebol?',
        opcoes: ['8', '10', '9', '7'],
        correta: '7'
    },
    {
        pergunta: 'FIM',
        opcoes: ['Tentar novamente']
        
    },
    
]

function Questao() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resposta, setResposta] = useState("")
    const [pontos, setPontos] = useState(0)
    
    const verificarResposta = (opcao) => {
        if (opcao === questoes[currentQuestion].correta) {
            setResposta("Resposta correta");
            setPontos(pontos + 5)
        } else {
            setResposta("Resposta errada");
            setPontos(pontos - 2)
        }


        if (currentQuestion < questoes.length-1) {
            setCurrentQuestion(currentQuestion + 1)
        } else { //FIM
            setResposta(null)
            setCurrentQuestion(currentQuestion - (questoes.length-1))
            setPontos(0)
        }
    }

    return (
        <div className="questao">
            <h1>{questoes[currentQuestion].pergunta}</h1>
            {questoes[currentQuestion].opcoes.map(
                (opcao, index) => (
                    <button className="btn" key={index} onClick={() => verificarResposta(opcao)}>{opcao}</button>
                    ))
                }
            <p>Pontos: {pontos}</p> 
            <h1 id="res">{resposta}</h1>
        </div>
    )

}

export default Questao;