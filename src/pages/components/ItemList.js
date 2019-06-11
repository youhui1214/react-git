import React, {Component} from 'react'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,  // 控制帖子
            post: props.item  // 使用state来控制显示时，不使用props在render中控制，最好接受父组件更新值时使用componentWillReceiveProps
        }
    }
    
    componentWillReceiveProps(nextProps) {
        // 父组件更新post后，更新子组件的state
        if (this.props.post !== nextProps.item) {
            this.setState({
                post: nextProps.item
            })
        }
    }
    handelVote = () => {
        this.props._handelVote(this.props.item.id)
    };
    handelTitleChange = (e) => {
        const newPost = { ...this.state.post, title: e.target.value };
        this.setState({
            post: newPost
        })
    };
    
    // 保存/编辑按钮点击逻辑
    handleEditPost = () => {
        const editing = this.state.editing;
        if (editing) {
            this.props.onSave({
                ...this.state.post
            })
        }
        this.setState({
            editing: !editing
        })
    };
    
    render() {
        const {post} = this.state;
        // const {post} = this.props;
        return (
            <li>
                <div>
                    {
                        this.state.editing
                            ? <form>
                                <textarea
                                    value={post.title}
                                    onChange={this.handelTitleChange}
                                />
                            </form>
                            : post.title
                    }
                </div>
                <div>
                    创建人：<span>{post.author}</span>
                </div>
                <div>
                    创建时间：<span>{post.date}</span>
                </div>
                <div>
                    <button onClick={this.handelVote}>点赞</button><span>{post.vote}</span>
                </div>
                <div>
                    <button onClick={this.handleEditPost}>
                        {this.state.editing ? '保存' : '编辑'}
                    </button>
                </div>
            </li>
        )
    }
}

export default ItemList;
