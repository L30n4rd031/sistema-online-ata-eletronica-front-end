import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

  state = {
    atas: [],
  }

  componentDidMount() {
    this.loadAtas();
  }

  loadAtas = async () => {
    const response = await api.get('/atas');

    this.setState({ atas: response.data});
  };

  render() {
    const { atas } = this.state;

    return (
      <div className="atas-list">
        {atas.map(ata => (
          <article key={ata._id}>
            <strong>{ata.title}</strong>
            <p>Data: <Moment format="MM/DD/YYYY" date={ata.date} /> | Horário de Início: {ata.startTime} - Horário de Término: {ata.endTime}</p>
            <Link to={`/ata/${ata._id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    );
  }
}
