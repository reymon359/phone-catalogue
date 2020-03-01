import React, { Component } from 'react';


class Intro extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <div>
               <p className="f4 near-white pb4">
                    Project done by  <a className="link underline near-white hover-navy" href="https://ramonmorcillo.com/">Ramón Morcillo</a> 
                    for the <a  className="link underline near-white hover-navy" href="https://www.guidesmiths.com/">Guidesmiths</a> interview code 
                    challenge about React ( <a  className="link underline near-white hover-navy" href="https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue">more info here</a> ). 
                    You can find the source code <a  className="link underline near-white hover-navy" href="https://github.com/reymon359/phone-catalogue">here</a>.
                </p>
            </div>
        );
    }
}

export default Intro;