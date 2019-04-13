import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Atas extends Component {

  state = {
    ata: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/atas/${id}`);

    this.setState({ ata: response.data });
  };

  render() {
    const { ata } = this.state;
    return (
      <div className="ata-info">
        <h1>{ata.title}</h1>


      </div>
    );
  }
}
