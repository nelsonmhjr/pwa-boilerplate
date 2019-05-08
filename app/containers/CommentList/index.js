import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import compose from 'recompose/compose';
import injectReducer from '../../utils/injectReducer';

import Button from '@material-ui/core/Button';

import reducer from './reducer';
import { selectComment } from './selector';
import { updateComment } from './actions';
import { Divider } from '@material-ui/core';

export const CommentList = (props) => (
    <div>
        <br />
        <Button onClick={props.updateComment} color="primary" variant="raised">Update</Button>
        <h1> {props.comment} </h1>
    </div>
);

CommentList.propTypes = {
    comment: PropTypes.string,
    updateComment: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    comment: selectComment,
});

const mapDispatchToProps = (dispacth) => ({
    updateComment: () => dispacth(updateComment()),
});

export default compose(
    injectReducer({ key: 'commentList', reducer }),
    connect(mapStateToProps, mapDispatchToProps)
)(CommentList);