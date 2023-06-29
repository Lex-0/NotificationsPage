import React from "react";
import { useState, useEffect } from "react";
import "../app.css";
import { VscCircleFilled } from "react-icons/vsc";


export function App() {
  const [showIcon, setShowIcon] = useState(true);
  const [contador, setContador] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const ToggleClass = (divId) => {
    const div = document.getElementById(divId);

    if (div.classList.contains("notification")) {
      div.classList.remove("notification");
      div.classList.add("notification-read");
      setContador(contador - 1);
    }
  };

  const handleReset = () => {
    const divs = document.querySelectorAll(".notification");

    divs.forEach((div) => {
      div.classList.remove("notification");
      div.classList.add("notification-read");
      setShowIcon(false);
    });

    const initialCount = document.querySelectorAll(".notification").length;
    setContador(initialCount);
  };

  const handleNotification = () => {
    setMostrarMensaje(!mostrarMensaje);
  };

  useEffect(() => {
    const initialCount = document.querySelectorAll(".notification").length;
    setContador(initialCount);
  }, []);

  return (
    <div>
      <div className="content">
        <nav>
          <div className="browser">
            <h1>Notificaciones</h1>
            <h2 className="ContentContador ">{contador}</h2>
          </div>
          <input
            type="radio"
            id="All-read"
            name="reset"
            onClick={handleReset}
          />
          <label htmlFor="All-read">Marca todo como leido</label>
        </nav>
        <form className="contents">
          <div
            id="div-1"
            className="notification"
            onClick={() => ToggleClass("div-1")}
          >
            <img src='assets/img/img4.webp' alt="text" />
            <div className="group">
              <div className="info">
                <span className="name">Mark Webber</span>
                <span className="description">
                  reacciono a tu publicacion reciente
                </span>
                <span className="reference">Mi primer torneo hoy </span>
                {document
                  .getElementById("div-1")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>
              <span className="time"> Hace 1 minuto </span>
            </div>
          </div>
          <div
            id="div-2"
            className="notification "
            onClick={() => ToggleClass("div-2")}
          >
            <img src='assets/img/img8.webp' alt="text" />
            <div className="group">
              <div className="info">
                <span className="name">Angela Gray</span>
                <span className="description">te siguio</span>
                {document
                  .getElementById("div-2")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>
              <span className="time"> Hace 5 minutos </span>
            </div>
          </div>
          <div
            id="div-3"
            className="notification "
            onClick={() => ToggleClass("div-3")}
          >
            <img src='assets/img/img6.webp' alt="text"/>
            <div className="group">
              <div className="info">
                <span className="name"> Jacob Thompson</span>
                <span className="description">se ha unido a tu grupo</span>
                <span className="reference">Chess Club </span>
                {document
                  .getElementById("div-3")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>
              <span className="time"> Hace 1 dia </span>
            </div>
          </div>
          <div className="contNoti" onClick={handleNotification}>
            <div
              id="div-4"
              className="notification"
              onClick={() => ToggleClass("div-4")}
            >
              <img src='assets/img/img1.webp' alt="text"/>
              <div className="group">
                <div className="info">
                  <span className="name">Rizky Hasanudin</span>
                  <span className="description">
                    te envio un mensaje privado
                  </span>
                  {document
                    .getElementById("div-4")
                    ?.classList.contains("notification") && (
                    <VscCircleFilled className="icon" />
                  )}
                </div>
                <span className="time"> Hace 5 dias </span>
              </div>
            </div>
            {mostrarMensaje && (
              <div className="menssage">
                <p>
                  Hola, gracias por montar el club de ajedrez. He sido miembro
                  durante algunas semanas y ya me estoy divirtiendo mucho y
                  mejorando mi juego.
                </p>
              </div>
            )}
          </div>

          <div
            id="div-5"
            className="notification"
            onClick={() => ToggleClass("div-5")}
          >
            <img src='assets/img/img5.webp' alt="text"/>
            <div className="group">
              <div className="info">
                <span className="name">Kimberly Smith</span>
                <span className="description">comento tu publicacion</span>
                {document
                  .getElementById("div-5")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>

              <span className="time"> Hace 1 semanas </span>
            </div>
            <div className="content-img">
              <img src='assets/img/img2.webp' alt="text"/>
            </div>
          </div>
          <div
            id="div-6"
            className="notification "
            onClick={() => ToggleClass("div-6")}
          >
            <img src='assets/img/img3.webp' alt="text"/>
            <div className="group">
              <div className="info">
                <span className="name"> Nathan Peterson</span>
                <span className="description">
                  reacciono a tu publicacion reciente
                </span>
                <span className="reference">
                  5 estrategias de juego final para aumentar tu tasa de
                  ganancias{" "}
                </span>
                {document
                  .getElementById("div-6")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>
              <span className="time"> Hace 2 semanas </span>
            </div>
          </div>
          <div
            id="div-7"
            className="notification"
            onClick={() => ToggleClass("div-7")}
          >
            <img src='assets/img/img7.webp' alt="text"/>
            <div className="group">
              <div className="info">
                <span className="name"> Anna Kim</span>
                <span className="description">abandono el grupo</span>
                <span className="reference">Chess Club </span>
                {document
                  .getElementById("div-7")
                  ?.classList.contains("notification") && (
                  <VscCircleFilled className="icon" />
                )}
              </div>
              <span className="time"> Hace 2 semanas </span>
            </div>
          </div>
        </form>
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Lex-0" target="_black" rel="noreferrer">Lex-0</a>.
      </footer>
    </div>
  );
}
