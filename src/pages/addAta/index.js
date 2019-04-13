import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class AddAta extends Component {

  state = {
    ata: {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      place: '',
      participants: '',
      schedules: '',
      userId: 1,
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.ata;

    api.post('/atas', {data}).then(response => {
       alert('Ata adicionada com sucesso');
    }).catch(error => {
       alert('Não foi possível adiconar ata');
    });

  };

  render() {
    return (
      <div className="ata-add">
        <div className="title">
          <h1>ADICIONAR ATA</h1>
          <hr/>
        </div>
        <div className="body-form">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <label>Título</label>
              <input type="text" className="form-control" placeholder="Título" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Data</label>
              <input type="date" value={this.state.ata.date} className="form-control" placeholder="00/00/0000" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <br/>
            </div>
            <div className="col-md-3">
              <label>Horário de Inìcio</label>
              <input type="text" value={this.state.ata.startTime} className="form-control" placeholder="00:00" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
              <br/>
            </div>
            <div className="col-md-3">
              <label>Horário de Término</label>
              <input type="text" value={this.state.ata.endTime} className="form-control" placeholder="00:00" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <br/>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Local</label>
              <input type="text" value={this.state.ata.place} className="form-control" placeholder="Local" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <br/>
            </div>
            <br/>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Participantes</label>
              <input type="text" value={this.state.ata.participants} className="form-control" placeholder="Ex: josé, joão" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Pautas</label>
              <textarea value={this.state.ata.schedules} className="form-control" cols="30" rows="10"></textarea>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">ADICIONAR</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
