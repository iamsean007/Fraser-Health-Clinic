var React = require('react');

var AddAppointment = React.createClass({

  //to toggle display:hide property to show/hide on user click
  toggleAptDisplay: function() {
    this.props.handleToggle();
  },

  handleAdd: function(e) {
    var tempItem = {
      patientName: this.refs.inputPatientName.value,
      respondantName: this.refs.inputRespondantName.value,
      aptDate: this.refs.inputAptDate.value + ' ' +
        this.refs.inputAptTime.value,
      aptNotes: this.refs.inputAptNotes.value
    } //tempItem
    e.preventDefault();
    this.props.addApt(tempItem);
  }, //handleAdd

  render: function() {

    var displayAptBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay }>
        <span className="glyphicon glyphicon-plus"></span> Add Appointment</div>
        <div className="panel-body" style={ displayAptBody }>
          <form className="add-appointment form-horizontal"
          onSubmit={ this.handleAdd }>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="patientName">Patient Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="patientName" ref="inputPatientName" placeholder="Patient's First Name and Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="patientRespondant">Patient's Immediate Respondant Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="patientRespondant" ref="inputRespondantName" placeholder="Respondant's First and Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptDate" >Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control"
                  id="aptDate" ref="inputAptDate" placeholder="YYYY-MM-DD"/>
              </div>
              <label className="col-sm-2 control-label" htmlFor="aptTime" >Time</label>
              <div className="col-sm-4">
                <input type="time" className="form-control"
                  id="aptTime" ref="inputAptTime" placeholder="24:00"/>
              </div>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="4" cols="50"
                  id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )//return
  } //render
}); // AddAppointment

module.exports = AddAppointment;
