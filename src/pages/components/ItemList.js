import React, {Component} from 'react'

//  无状态组件
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.handleVote = this.handleVote.bind(this)
    }
    
    handleVote() {
        this.props._handleVote(this.props.content.id)
    }
    
    render() {
        const {title, vote} = this.props.content;
        return (
            <li>
                <span>{title}</span>
                <div>
                    <button onClick={this.handleVote}>点赞</button>
                    <span>{vote}</span>
                </div>
            </li>
        )
    }
    
}

export default ItemList;
