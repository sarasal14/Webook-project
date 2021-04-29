import React from 'react'; 


class ValidateForm extends React.Component {
    constructor(props) {
      super(props)
      this.validate = this.validate.bind(this)
    }
    validate() {
        alert(this);
   
    }
    render() {
      return (
        <button type="submit" className="btn btn-secondary justify-content-center" onClick={this.validate}>שלח</button>
      );
    }
  }

  export default ValidateForm;