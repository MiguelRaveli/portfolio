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
      titulo="Learn Language"
      p1="Um pequeno site onde é apenas possível visualizar dois idiomas: 'Inglês ; Italiano', onde contém algumas frases de seu idioma onde é possível apenas mostrar sua tradução e avançar para a próxima fase apertando em 'Fácil' ou 'Difícil'. No final é exibido a quantidade de frases que você contou como fácil ou difícil. Made with React+Vite."
      p3="Ver website"
      link="https://miguelraveli.github.io/Anki-Remake-Inspiration/"
    />,
    <Apresentacao
      titulo="Lista de Tarefas"
      p1="Este é um site que permite a você gerenciar suas tarefas de forma eficiente. Você pode adicionar, remover, marcar como completa, filtrar por status, pesquisar e ordenar suas tarefas."
      p3="Ver website"
      link="https://miguelraveli.github.io/To-Do-List-React/"
    />,
  ];

  const {
    componenteAtual,
    mudarParaHome,
    mudarParaLearn,
    mudarParaTodo,
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
            <div onClick={mudarParaLearn} className={styles.projetos}>
              <Projetos titulo="Projetos" projetos="Learn Language" />
            </div>
            <div onClick={mudarParaTodo} className={styles.projetos}>
              <Projetos projetos="To Do List" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
