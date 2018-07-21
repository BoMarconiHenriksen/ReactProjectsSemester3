import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions'

class HeroList extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
                <h4>Your Hero Squard</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">{hero.name}</div>
                                <div 
                                    className="list-item right-button" 
                                    onClick={() => this.props.removeCharacterById(hero.id)}
                                >
                                    x
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //console.log('state1', state);
    return {
        heroes: state.heroes
    };
}

// I stedet for denne funktion som i characterList så kan man også gøre dette.
/* function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCharacterById }, dispatch);
} */

export default connect(mapStateToProps, { removeCharacterById })(HeroList);
