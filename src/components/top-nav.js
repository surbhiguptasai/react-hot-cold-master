import React from 'react';
import {connect} from 'react-redux';
import './top-nav.css';
import {onClose} from '../actions';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        this.props.dispatch(onClose());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);