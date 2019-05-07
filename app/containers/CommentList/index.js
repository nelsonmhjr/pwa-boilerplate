import React from 'react';
import PropTypes from 'prop-types';

export const CommentList = (props) => <h1> {props.comment} </h1>;

CommentList.PropTypes = {
    comment: PropTypes.string,
};

export default CommentList;