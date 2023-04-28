import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Images from '../img/index.js';
import '../css/Styles.css';
import { Link } from 'react-router-dom';

function CambiarCl(props) {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <Container className="py-5">
            <Fragment>
                <Helmet>
                    <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background-image: url(${Images.planta});
                    background-repeat: no-repeat;
                    background-position: top;
                    background-attachment: fixed;
                    padding-top: 4.2rem;
                    padding-bottom: 4.2rem;  
                    background-size: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;                    
                }
                .form-container {
                    max-width: 700px; /* Increase the maximum width of the form container */
                    margin: 0 auto; /* Center the form container horizontally */
                    padding: 2rem; /* Add some padding to the form container */
                    background-color: #fff; /* Change the background color of the form container */
                    border-radius: 10px; /* Add some rounded corners to the form container */
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow to the form container */
                }
                
                .navbar {
                    position: fixed;
                    background-color: #f07435 !important;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1;
                }

                h1 {
                    color: white;
                }
                
                form {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0,0,0,.1);
                }
                
                input[type="text"],
                input[type="email"],
                input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #f2f2f2;
                    font-size: 16px;
                }
                
                button {
                    background-color: #003c71;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
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
                    
                    .dropdown-menu {
                        width: 200px;
                        position: absolute;
                        top: 100%;
                        left: auto !important;
                        right: 0 !important;
                    }
                    .btn-gris{
                        background-color: #57575A !important;
                        color: white !important;
                      }
                      
                    @media only screen and (max-width: 767px) {
                        .form-container {
                          position: static !important;
                          margin-top: 2rem;
                        }
                        .dropdown-menu {
                            width: 413px !important;
                            text-align-last: center !important;
                        }
                        
                      }
                      
                    
                `}
                    </style>
                </Helmet>
            </Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img className='oblank' src={require('../img/logo_white.png')} width="150" height="50" />
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
                    <div className="navbar-nav ml-auto" style={{ position: 'relative' }}>
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
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center mb-4">Cambiar Contraseña</h1>
                    <div >
                        <Form className="form-container">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nro de documento</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu numero de documento" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña actual</Form.Label>
                                <Form.Control type="password" placeholder="Tu contraseña actual" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña nueva</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu nueva contraseña" />
                            </Form.Group>
                            <button className="naranjabtn btn btn-block mybtn btn-success tx-tfm d-block w-100 mt-3" variant="primary" type="submit">Guardar cambios</button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CambiarCl;