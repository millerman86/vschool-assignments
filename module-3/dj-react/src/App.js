import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


















function Square(props) {
  return (
    <div className="square-container" style={{backgroundColor: props.color}}>
      &nbsp;
    </div>  
  );
}

Square.propTypes = {
  color: PropTypes.string
};

function DjButton(props) {
  return (<button onClick={() => {
    props.click();

  }}>{props.buttonText} </button>);
}

DjButton.propTypes = {
  click: PropTypes.func, 
  buttonText: PropTypes.string
};


function SmallTimeDj(props) {
 
  return (
    <div className="flex dj-component" onClick={() =>{
        props.click();
        // props.playSound && props.playSound;
      }}>
      <div className="default white"></div>
      <div className="default black"></div>
      <div className="default black"></div>
      <div classsame="default white"></div>
    </div>
  );
}

SmallTimeDj.propTypes = {
  click: PropTypes.func
};

function BigTimeDj() {
  return (
    <div>
      <div className="flex dj-component">Squares turn into circles</div>
      <div className="flex dj-component">Circles turn into squares</div>
      <div className="flex dj-component">All squares turn yellow</div>
      <div className="flex dj-component">Make 4 sqaures inside each square</div>
    </div>
  )
}

BigTimeDj.propTypes = {

}

function PartyDj(props) {
  return (
    <div className="flex dj-component" onClick={() => {
        props.click();
        // playSound();
      }}>
      <div className="purple"></div>
      <div className="purple"></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

PartyDj.propTypes = {
  click: PropTypes.func
};


function ProfessionalDj(props) {
  return (
    <div>

      <div className="flex dj-component" onClick={() => {
          props.leftClick();
          // playSound();
        }}>
        <div className="black"></div>
        <div className="black"></div>
        <div className="blue"></div>
        <div className="black"></div>
      </div>

      <div className="flex dj-component" onClick={() => {
          props.rightClick();
          // playSound();
        }}>
        <div className="black"></div>
        <div className="black"></div>
        <div className="black"></div>
        <div className="blue"></div>
      </div>


    </div>
  );
}

ProfessionalDj.propTypes = {
  leftClick: PropTypes.func,
  rightClick: PropTypes.func
}

// function BigTimeDj() {

// }

// function TheGoat() {

// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      colors: ["black", "white", "black", "white"], 
      buttons: [
      {
        buttonText: "Toggle Colors", 
        click: "smallTimeDj"
      }, 
      {
        buttonText: "Turn Top 2 Buttons Purple", 
        click: "partyDj"
      }, 
      {
        buttonText: "Turn Bottom 2 Buttons Blue: 1 x 1", 
        click: "projessionalDj"
      }, 
      {
        buttonText: ""
      }, 

  
      ]
    };

    this.smallTimeDj = this.smallTimeDj.bind(this);
    this.partyDj = this.partyDj.bind(this);
    this.professionalDj = this.professionalDj.bind(this);
    this.oneOfTheGreats = this.oneOfTheGreats.bind(this);
    this.theGoat = this.theGoat.bind(this);

    this.professionDjLeftButton = this.professionDjLeftButton.bind(this);
    this.professionalDjRightButton = this.professionalDjRightButton.bind(this);
  }


  render() {
    const squares = this.state.colors.map((i, index) => {
      return <Square key={index} color={this.state.colors[index]}/>;
    });

    const buttons = this.state.buttons.map((button, index) => {
      return <DjButton key={index} blah="blah" buttonText={button.buttonText} click={this[button.click]}/>;
    });
    
    return (
      <div> 

        <div className="button-container">
          {squares}
        </div>

        {buttons}
        
        <SmallTimeDj click={this.smallTimeDj} />
        <PartyDj click={this.partyDj} />
        <ProfessionalDj rightClick={this.professionalDjRightButton} leftClick={this.professionDjLeftButton} />
        <BigTimeDj />

      </div>
    );
  }

  smallTimeDj() {
    console.log('you found me');
  // You will have one button that will change all four squares either black or white. White if the first one is not white. 
  // Black if the first square is white.
  this.setState((previousState) => {
    return {
    
      colors: [...previousState.colors.map((color) => {
        if (color === 'white') {
          return 'black';
        } else if (color === 'black') {
          return 'white';
        } else {
          return color;
        }
      
      })]
    };
  });
  }

  partyDj() {
  // Add a second button. The second will turn the top half (both squares) of the grid purple.
  this.setState((previousState) => {
    return {
      colors: ['purple', 'purple', previousState.colors[2], previousState.colors[3]]
    };
  });

  }



  professionalDj() {
  // Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, 
  // but individually. One will be linked to the bottom left, and the other to the bottom right.

  }

  professionDjLeftButton() {
    this.setState((previousState) => {
      return { colors: [previousState.colors[0], previousState.colors[1], 'blue', previousState.colors[3], ] }
    })
  }

  professionalDjRightButton() {
    this.setState((previousState) => {
      return { colors: [previousState.colors[0], previousState.colors[1], previousState.colors[2], 'blue'] }
    })
  }

  bigTimeDj() {
  // Your next four buttons will each be linked to one of the squares. These buttons can have any affect on those squares that you wish.
  

  }

  oneOfTheGreats() {
  // Your buttons will play sounds.

  }

  theGoat() {
  // You will be able to use drop downs/inputs/radio buttons to submit a pattern for your grid to follow over time.

  }
}

export default App;























