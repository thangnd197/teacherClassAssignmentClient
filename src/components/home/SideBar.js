import React from 'react';

class InputList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputList: props.inputList};
    this.changeStatePageContent = props.changeStatePageContent;
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
            
          </ul>
        </li>
      );

    return (
      <div className="sidebar left ">
        <ul className="list-sidebar bg-defoult">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default InputList;