import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion'; 

 


Modal.setAppElement('#root'); 

const Section2 = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: './assets/image 2 (1).jpg',
      title: 'Travelgram',
      description: 'Rede social onde as pessoas mostram os registros de suas viagens pelo mundo',
      tech: 'React, Node.js, MongoDB',
    },
    {
      img: '/assets/image 2.jpg',
      title: 'Tech News',
      description: 'Homepage de um portal de notícias sobre a área de tecnologia',
      tech: 'HTML, CSS, JavaScript',
    },
    {
      img: '/assets/image 2 (2).jpg',
      title: 'Página de receita',
      description: 'Página com o passo a passo de uma receita para cupcakes',
      tech: 'HTML, CSS, Bootstrap',
    },
    {
      img: '/assets/image 2 (3).jpg',
      title: 'Zingen',
      description: 'Landing Page completa e responsiva de um aplicativo de Karaokê',
      tech: 'React, Sass, Firebase',
    },
    {
      img: '/assets/image 2 (4).jpg',
      title: 'Refund',
      description: 'Um sistema para pedido e acompanhamento de reembolso',
      tech: 'Node.js, Express, MySQL',
    },
    {
      img: '/assets/image 2 (5).jpg',
      title: 'Página de turismo',
      description: 'Página com as principais informações para quem quer viajar para Busan',
      tech: 'React, TailwindCSS',
    },
  ];
  
  

  
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h4 style={styles.title}>Meu trabalho</h4>
        <h5 style={styles.subtitle}>Veja os meus projetos em destaque</h5>
      </div>
      <div style={styles.container}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.projectBox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => openModal(project)}
          >
            <img src={project.img} alt={project.title} style={styles.projectImage} />
            <h6 style={styles.projectTitle}>{project.title}</h6>
            <p style={styles.projectDescription}>{project.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={styles.modal}
          overlayClassName="modal-overlay"
        >
          <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
          <p style={styles.modalDescription}>{selectedProject.description}</p>
          <p style={styles.modalTech}>
            <strong>Tecnologias: </strong>
            {selectedProject.tech}
          </p>
          <button style={styles.closeButton} onClick={closeModal}>
            Fechar
          </button>
        </Modal>
      )}
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#16181d',
    padding: '50px 20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
  },
  title: {
    color: '#ff4500',
    fontSize: '24px',
  },
  subtitle: {
    color: 'white',
    fontSize: '18px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',  // Definindo 3 colunas fixas
    gap: '20px',
  },
  projectBox: {
    backgroundColor: '#292c34',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
  projectImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  projectTitle: {
    fontSize: '18px',
    color: '#ff4500',
  },
  projectDescription: {
    fontSize: '14px',
    color: '#ccc',
  },
  modal: {
    content: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      margin: 'auto',
      textAlign: 'center',
    },
  },
  modalTitle: {
    color: '#ff4500',
    fontSize: '24px',
    marginBottom: '10px',
  },
  modalDescription: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  },
  modalTech: {
    fontSize: '14px',
    color: '#555',
  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4500',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};


export default Section2;
