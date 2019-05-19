import React, {Component} from 'react'

class ItemList extends Component {
    handelVote = () =>{
        this.props._handelVote(this.props.item.id)
    };
    
    render() {
        const {title,vote} = this.props.item;
        return (
            <li>
                <div>{title}</div>
                <div>
                    <button onClick={this.handelVote}>点赞</button><span>{vote}</span>
                </div>
            </li>
        )
    }
}

export default ItemList;
