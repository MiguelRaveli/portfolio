import { useState } from "react";

export const mudarApresentacao = (steps: JSX.Element[]) =>{
    const [paginaAtual, setPaginaAtual] = useState(0)
    const mudarParaHome = () =>{
        setPaginaAtual(0)
    }
    const mudarParaLearn = () =>{
        setPaginaAtual(1)
    }
    const mudarParaTodo = () =>{
        setPaginaAtual(2)
    }
    
    const mudarParaGitHubFinder = () =>{
        setPaginaAtual(3)
    }
    const mudarParaPupPics = () =>{
        setPaginaAtual(4)
    }

    const mudarParaNews = () =>{
        setPaginaAtual(5)
    }
    return{
        paginaAtual,
        componenteAtual: steps[paginaAtual] ,
        mudarParaHome,
        mudarParaLearn,
        mudarParaTodo,
        mudarParaGitHubFinder,
        mudarParaPupPics,
        mudarParaNews
    }
}