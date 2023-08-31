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
        pergunta: 'FIM',
        opcoes: ['Tentar novamente']
    }
    
]

function Questao() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resposta, setResposta] = useState("")
    
    const verificarResposta = (opcao) => {
        if (opcao === questoes[currentQuestion].correta) {
            setResposta("Resposta correta");
        } else {
            setResposta("Resposta errada");
        }

        if (questoes[currentQuestion].pergunta == 'FIM') {
            setResposta(null)
        }

        if (currentQuestion < questoes.length-1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setCurrentQuestion(currentQuestion - (questoes.length-1))
            
            
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
            
            <h1 id="res">{resposta}</h1>
        </div>
    )

}


export default Questao;