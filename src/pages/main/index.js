import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {

  state = {
    atas: [],
    ataInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadAtas();
  }

  loadAtas = async (page = 1) => {
    const response = await api.get(`/atas?page=${page}`);

    const { docs, ...ataInfo } = response.data;

    this.setState({ atas: docs, ataInfo, page });
  };

  nextPage = () => {
    const { page, ataInfo } = this.state;

    if (page === ataInfo.pages) return;

    const pageNumber = page + 1;

    this.loadAtas(pageNumber);
  };

  prevPage = () => {
      const { page, ataInfo } = this.state;

      if (page === 1) return;

      const pageNumber = page - 1;

      this.loadAtas(pageNumber);
  };

  render() {
    const { atas, page, ataInfo } = this.state;

    return (
      <div className="atas-list">
        {atas.map(ata => (
          <article key={ata._id}>
            <strong>{ata.title}</strong>
            <p>Data: <Moment format="MM/DD/YYYY" date={ata.date} /> | Horário de Início: {ata.startTime} - Horário de Término: {ata.endTime}</p>
            <Link to={`/atas/${ata._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === ataInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
