import { useState } from "react";

export const mudarApresentacao = (steps: JSX.Element[]) =>{
    const [paginaAtual, setPaginaAtual] = useState(0)
    const mudarParaHome = () =>{
        setPaginaAtual(0)
    }
    const mudarParaFashion = () =>{
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
        mudarParaTodo,
        mudarParaGitHubFinder,
        mudarParaPupPics,
        mudarParaNews,
        mudarParaFashion
    }
}