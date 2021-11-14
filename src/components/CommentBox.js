import React, { Componen } from 'react'

class CommentBox extends React.Component {

    state = {
        comment: ""
    }

    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            comment: ''
        })

    }

    render() {

        const { comment } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea type="text" value={comment} onChange={this.handleChange}>
                </textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}


export default CommentBox

