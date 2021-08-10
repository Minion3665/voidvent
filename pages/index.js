import styles from '../styles/Home.module.css'
import {Component} from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: [], prev_to: null, to: '', message: ''}

        this.handleToChange = this.handleToChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleToChange(event) {
        this.setState({to: event.target.value})
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState((state) => {
            if (state.message === '') return
            let new_messages = state.messages.slice();
            if (state.prev_to !== state.to) {
                new_messages = [];
            }
            new_messages.push(state.message)
            return {
                messages: new_messages,
                prev_to: state.to,
                message: ''
            };
        })
    }

    render() {
        return (
            <div className={styles.background}>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleToChange} value={this.state.to} placeholder={"Who are you mad at?"}/>
                    <input onChange={this.handleMessageChange} value={this.state.message} className={styles.thoughts} placeholder={"Type out your thoughts"}/>
                    <button type={"submit"}>Send it off</button>
                </form>
                <div className={styles.vents}>
                    {this.state.messages.map(
                        (message, index) => {
                            return (<div className={styles.message} key={index}>{message}</div>)
                        }
                    )}
                    <div className={styles.after}/>
                </div>
            </div>
        )
    }
}
