import React from 'react';

class InputList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputList: props.inputList};
    this.changeStatePageContent = props.changeStatePageContent;
  }

  askDeleting(input) {

    if (window.confirm("Do you want to delete input: " + input.name + " ?")) {

      fetch(
        'http://localhost:8080/user/1/inputs/' + input.id,
        {
          method: 'PUT'
        }
      ).then(
        res => {
          return res.json();
        }
      ).then(
        window.location.href="/"
      );
    } else {

    }
  }

  render() {

    const  listItems = this.state.inputList.map((input) => 
        <li key={input.id}> <a href="/" data-toggle="collapse" data-target={"#input" + input.id} className="collapsed active" > <span className="nav-label"> {input.name} </span> <span className="fa fa-chevron-down pull-right"></span> </a>
          <ul className="sub-menu collapse" id={"input" + input.id}>

            <li><a href="/" onClick={
              (e) => {
                e.preventDefault();
                this.changeStatePageContent("classes", input);
              }
            }>Class List </a></li>

            <li><a href="/" onClick={
              (e) => {
                e.preventDefault();
                this.changeStatePageContent("course4teacher", input);
              }
            }>Course For Teacher</a></li>

            <li><a href="/" onClick={
              (e) => {
                e.preventDefault();
                this.changeStatePageContent("solutions", input);
              }
            }>Solutions</a></li>
            
            <li><a href="/" onClick={
              (e) => {
                e.preventDefault();
                this.askDeleting(input);
              }
            }>Delete</a></li>
          </ul>
        </li>
      );

    return (
      <div className="sidebar left ">
        <ul className="list-sidebar bg-defoult">
          <button type="button" className="btn btn-primary nav-button" data-toggle="modal" data-target="#modalAddInput">add</button>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default InputList;