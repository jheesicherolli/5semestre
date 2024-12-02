import React, { useState } from 'react';
import '../styles.css';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
      <div className="submenu">
        <button>Currículos</button>
        <div className="submenu-content">
          <a href="/curriculo1.pdf" target="_blank">Currículo 1</a>
          <a href="/curriculo2.pdf" target="_blank">Currículo 2</a>
        </div>
      </div>
      <button>Sair</button>
    </nav>
  );
};

// PostForm Component
const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      setError('Título e conteúdo são obrigatórios.');
      return;
    }
    addPost({ id: Date.now(), title, content });
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Adicionar Post</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

// Post Component
const Post = ({ post, deletePost, updatePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (title.trim() === '' || content.trim() === '') {
      setError('Título e conteúdo são obrigatórios.');
      return;
    }
    updatePost({ ...post, title, content });
    setIsEditing(false);
    setError('');
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <header>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleUpdate}>Salvar</button>
          </header>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      ) : (
        <>
          <header>
            <h1>{post.title}</h1>
            <span>{new Date(post.id).toLocaleDateString()}</span>
          </header>
          <p className="card-content-text">{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deletePost(post.id)}>Deletar</button>
        </>
      )}
    </div>
  );
};

// PostList Component
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <div className="container-publication">
      <PostForm addPost={addPost} />
      <div className="card-container">
        {posts.map(post => (
          <Post key={post.id} post={post} deletePost={deletePost} updatePost={updatePost} />
        ))}
      </div>
    </div>
  );
};

// Projeto Component
const Projeto = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <PostList />
      </div>
    </div>
  );
};

export default Projeto;