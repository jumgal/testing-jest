import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentList extends React.Component {


    renderComments = () => {
        const { comments } = this.props
        return (
            comments.map(comment => (
                <li key={comment}>{comment}</li>
            ))
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}


export default connect(mapStateToProps, actions)(CommentList);
