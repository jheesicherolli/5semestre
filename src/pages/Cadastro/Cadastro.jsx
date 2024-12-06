import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

export const Cadastro = () => {
  const navigate = useNavigate();

  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para aplicar a máscara no CPF e limitar a 11 dígitos
  const mascaraCPF = (value) => {
    let v = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    v = v.slice(0, 11); // Limita o valor a 11 caracteres numéricos
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
  };

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Cadastro:", { username, cpf, email, password });

    navigate("/blog");
  };

  return (
    <div className="container">
      <div className="tech-road-map">TechRoadMap</div>
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de Usuário"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="CPF"
            required
            value={cpf}
            onChange={(e) => setCpf(mascaraCPF(e.target.value))}
          />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
        <div className="signup-link">
          <p>
            Já tem uma conta? <a href="/login">Entre</a>
          </p>
        </div>
      </form>
    </div>
  );
};