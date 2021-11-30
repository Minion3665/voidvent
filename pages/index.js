import styles from '../styles/Home.module.css'
import {Component, createRef} from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: ['Welcome. Everything you put here is completely private. Messages will fade as they go up the page and disappear after a few minutes, or you can refresh the page to clear them too. Let out your frustrations, and watch them slip away into the void.'], prev_to: "welcome", message: ''}

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.messageInputBox = createRef();
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState((state) => {
            try {
                this.messageInputBox.current.focus();
            } catch (e) {}  // if we can't focus the message input box just ignore it
            if (state.message === '') return
            let new_messages = state.messages.slice();
            if (state.prev_to !== "messages") {
                new_messages = [];
            }
            new_messages.push(state.message)
            return {
                messages: new_messages,
                prev_to: "messages",
                message: ''
            };
        })
    }
    
    handleClear(event) {
        event.preventDefault();
        this.setState({prev_to: "cleared", messages: ["Poof: it's gone; hopefully you feel a little better after letting your frustrations out. If there's something you still need to vent about feel free to continue..."], message: ''})
    }

    render() {
        return (
            <div className={styles.background}>
                <form onSubmit={this.handleSubmit} onReset={this.handleClear}>
                    <input ref={this.messageInputBox} onChange={this.handleMessageChange} value={this.state.message} className={styles.thoughts} placeholder={"Type out your thoughts"}/>
                    <button type={"submit"}>Send it off</button>
                    <button type={"reset"}>Clean the void</button>
                </form>
                <div className={styles.vents}>
                    {this.state.messages.map(
                        (message, index) => {
                            return (<div className={styles.message} key={`${this.state.prev_to}${index}`}>{message}</div>)
			}
                    )}
                    <div className={styles.after}/>
                </div>
            </div>
        )
    }
}
