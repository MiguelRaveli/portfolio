import Apresentacao from "../components/Apresentacao/Apresentacao";
import styles from "./Home.module.css";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Icones from "../components/Icones/Icones";
import { Link } from "react-router-dom";
import Projetos from "../components/Projetos/Projetos";
import { mudarApresentacao } from "../hooks/mudarApresentacao";

const Home = () => {
  const apresentacoes = [
    <Apresentacao
      titulo="Bem-Vindo."
      p1="Meu nome é Miguel Raveli, e eu sou um desenvolvedor front-end. Ainda estou no início da minha carreira e não tenho muita experiência profissional, mas já concluí alguns projetos por conta própria."
      p2="O que me move nessa área é minha paixão por aprender novas tecnologias e a constante busca por aprimorar meus projetos. Estou sempre buscando maneiras de tornar meus trabalhos cada vez melhores, e estou ansioso para o que o futuro reserva para mim."
      link=""
    />,
    <Apresentacao
      titulo="Calculadora"
      p1="Simplifique seus cálculos diários com a 'Calculadora Simples'. Essa ferramenta intuitiva oferece operações básicas, como soma, subtração, multiplicação, divisão e até mesmo potenciação. É a maneira perfeita de realizar cálculos com facilidade e rapidez. Traga simplicidade para suas operações matemáticas com a Calculadora Simples."
      p3="Ver website"
      link="https://miguelraveli.github.io/calculator/"
    />,
    <Apresentacao
      titulo="Lista de Tarefas"
      p1="Este é um site que permite a você gerenciar suas tarefas de forma eficiente. Você pode adicionar, remover, marcar como completa, filtrar por status, pesquisar e ordenar suas tarefas."
      p3="Ver website"
      link="https://miguelraveli.github.io/To-Do-List-React/"
    />,
    <Apresentacao
      titulo="GitHubFinder"
      p1="Esta é uma aplicação que permite a você pesquisar usuários do GitHub e exibir informações detalhadas sobre eles. Você pode encontrar a foto do usuário, nome, localização, seguidores e quem a pessoa segue."
      p3="Ver website"
      link="https://miguelraveli.github.io/GitHubFinder/"
    />,
  ];

  const {
    componenteAtual,
    mudarParaHome,
    mudarParaLearn,
    mudarParaTodo,
    mudarParaGitHubFinder,
  } = mudarApresentacao(apresentacoes);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.redes}>
          <div onClick={mudarParaHome} className={styles.Rimg}></div>
          <div className={styles.icons}>
            <Link to="https://github.com/MiguelRaveli">
              <Icones Icone={AiFillGithub} />
            </Link>
            <Link to="https://www.linkedin.com/in/miguel-raveli-gusmao/">
              <Icones Icone={AiFillLinkedin} />
            </Link>
            <Link to="mailto:miguelraveli123@gmail.com?">
              <Icones Icone={AiFillMail} />
            </Link>
          </div>
        </div>
        <div className={styles.container_home}>
          <div className={styles.componentes}>{componenteAtual}</div>
          <div className={styles.container_apresentacao}>
            <div onClick={mudarParaTodo} className={styles.projetos}>
              <Projetos titulo="Projetos" projetos="To Do List" />
            </div>
            <div onClick={mudarParaGitHubFinder} className={styles.projetos}>
              <Projetos projetos="GitHub Finder" />
            </div>
            <div onClick={mudarParaLearn} className={styles.projetos}>
              <Projetos projetos="Calculadora" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
