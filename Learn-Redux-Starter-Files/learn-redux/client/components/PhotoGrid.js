import React from 'react';
import Photo from './Photo';

export default React.createClass({
    render() {
        return (
            <div className="photo-grid">
                { this.props.posts.map( (val, i)=> <Photo key={i} i={i} post={post} {...this.props}/> ) }
            </div>
        )
    }
})