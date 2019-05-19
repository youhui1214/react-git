import React, {Component} from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'


class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
        this._handelVote = this._handelVote.bind(this)
    }
    
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5cdd1e719bcfaf0b145465a1/test/list')
        .then((res)=>{
            const list = res.data.data.posts;
            this.setState({list})
        })
    }
    
    _handelVote(id){
        const newList = this.state.list.map((item)=>{
            return item.id === id ? {...item, vote: ++item.vote} : item
        });
        this.setState({
            list: newList
        })
    }
    
    render() {
        return (
            <div>
                <div>帖子列表：</div>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return <ItemList _handelVote={this._handelVote} key={item.id} item={item}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;
