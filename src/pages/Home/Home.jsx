import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

 export const Home = () => {
  


  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Login:", { username, password });
  };

  return (
    
    <div className="home">

    <div className="tech-road-map">TechRoadMap</div>
      <form onSubmit={handleSubmit}>
        <h1>Conectando você ao futuro da tecnologia e traçando o caminho para a carreira dos seus sonhos.</h1>
        <h5>Atualize-se e construa o futuro.</h5>

        <Link to="/login">
        <button type="submit">Login</button>
        </Link>
       
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="/cadastro">Registrar</a>{" "}
          </p>
        </div>

      </form>
    </div>
  );
};

