import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../css/Styles.css';
import Images from '../img/index.js'

function Menu(props) {

  const [showDropdown, setShowDropdown] = useState(false);

  const [showNav, setShowNav] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const classes = [
    {
      title: "Mathematics",
      teacher: "John Smith",
      date: "2023-05-01",
      time: "10:00 AM",
      location: "Online",
    },
    {
      title: "History",
      teacher: "Jane Doe",
      date: "2023-05-03",
      time: "2:00 PM",
      location: "Room 101",
    },
    {
      title: "Science",
      teacher: "Bob Johnson",
      date: "2023-05-05",
      time: "9:00 AM",
      location: "Room 202",
    },
  ];

  return (
    <div>
      <Fragment>
        <Helmet>
          <style>{`
                  .sidebar {
                    width: 200px;
                    height: 100%;
                    background-color: #f07435;
                    position: fixed;
                    top: 0;
                    left: 0;
                    padding-top: 20px;
                    border-right: 1px solid #ddd;
                  }

                  .oblank {
                    position: relative;
                    top: -5px;
                  }

                  ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                  }
                  
                  li {
                    padding: 10px;
                  }

                  .btn-gris{
                    background-color: #57575A !important;
                    color: white !important;
                  }
                  
                  a {
                    text-decoration: none;
                    color: #333;
                  }                   
                  .navbar {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    background-color: #f07435 !important;
                    height: 60px;
                    padding: 10px;
                    box-sizing: border-box;
                    z-index: 1;
                  }
                  .nav-items a {
                    color: #333;
                    text-decoration: none;
                    margin: 0 20px;
                  }
                  .user-side {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                  }
                  
                  .dropdown {
                    margin-left: 10px;
                  }
                  .dropdown-menu {
                    width: 200px;
                    position: absolute;
                    top: 100%;
                    left: auto !important;
                    right: 0 !important;
                  }

                  .main-content {
                    padding-left: 220px; /* add left padding to prevent overlap */
                  }
                  
                  .card {
                    margin-bottom: 20px; /* add some bottom margin for spacing */
                  }

                  /* Styles for screens smaller than 768px (mobile devices) */
                  @media only screen and (max-width: 768px) {
                    /* Hide the sidebar */
                    .sidebar {
                      display: none;
                    }
                    
                    .main-content {
                      padding-left: 20px;
                    }

                    /* Adjust the main content to take up full width */
                    .content {
                      width: 100%;
                    }
                    
                    /* Adjust the navbar to stack vertically */
                    .navbar-nav {
                      flex-direction: column;
                    }
                    
                    /* Hide the user dropdown menu */
                    .user-side{
                      display: none;
                    }
                    
                    /* Show the user name on the navbar */
                    .user-name {
                      display: inline-block;
                      margin-right: 10px;
                    }

                    .navbar-collapse {
                      background-color: #f07435;
                      z-index: 999;
                      position: absolute;
                      top: 60px;
                      width: 100%;
                      left: 0;
                    }

                    .dropdown-menu{
                      width: 354px !important;
                      text-align-last:center !important;
                    }

                    .navbar-nav .dropdown-menu {
                      position: absolute !important;
                      float: none;
                    }
                  }
                  `}
          </style>
        </Helmet>
      </Fragment>
      {/* Navbar */}      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img className='oblank' src={require('../img/logo_white.png')}  width="150" height="50"/>
          </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowNav(!showNav)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse${showNav ? " show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Notficaciones
            </a>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
        <button
                className="btn btn-gris dropdown-toggle" 
                type="button"
                id="userDropdown"
                onClick={toggleDropdown}
              >
                Admin
              </button>
              <ul
                className={`dropdown-menu${showDropdown ? " show" : ""}`}
                aria-labelledby="userDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/cambiar_clave">
                    Cambiar contraseña
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Cerrar sesión
                  </Link>
                </li>
              </ul>
        </div>
      </div>      
    </nav>
      {/* Sidebar */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 sidebar">
            <ul>
              <li><a href="#">Clases</a></li>
              <li><a href="#">Profesores</a></li>
              <li><a href="#">Horarios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          {/* Contenido */}
          <div className="col-md-9 col-lg-10 main-content">
            {/* Your card components go here */}
            <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-12">
                <h2>Lista de clases pendientes</h2>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/300x200.png?text=Class+1"
                    alt="Class 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Curso 1</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu ipsum et lectus convallis ultrices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/300x200.png?text=Class+2"
                    alt="Class 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Curso 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu ipsum et lectus convallis ultrices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/300x200.png?text=Class+3"
                    alt="Class 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Curso 3</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu ipsum et lectus convallis ultrices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/300x200.png?text=Class+4"
                    alt="Class 4"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Curso 4</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu ipsum et lectus convallis ultrices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;