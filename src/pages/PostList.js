import React, {Component} from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this._handelVote = this._handelVote.bind(this);
        this._handleSave = this._handleSave.bind(this)
    }
    
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5cdd1e719bcfaf0b145465a1/test/list')
        .then((res) => {
            const list = res.data.data.posts;
            this.setState({list})
        })
    }
    
    _handelVote(id) {
        const newList = this.state.list.map((item) => {
            return item.id === id ? {...item, vote: ++item.vote} : item
        });
        this.setState({
            list: newList
        })
    }
    
    _handleSave(post) {
        // 根据post的ID，过滤出当前要更新的post
        const posts = this.state.list.map(item => {
            return item.id === post.id ? post : item
        });
        
        this.setState({
            list: posts
        })
    }
    
    render() {
        return (
            <div>
                <div>帖子列表：</div>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return <ItemList onSave={this._handleSave} _handelVote={this._handelVote} post ={item} key={item.id} item={item}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default PostList;
