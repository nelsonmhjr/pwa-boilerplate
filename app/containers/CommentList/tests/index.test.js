import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

import { CommentList } from '../index';
import { ExpansionPanelActions, jssPreset } from '@material-ui/core';

describe('<CommentList />', () => {
    const defaultProps = {
        comment: 'test',
        updateComment: jest.fn(),
    };

    const renderedComponent = shallow(<CommentList { ... defaultProps }/>);

    it('renders component', () => {
        expect(renderedComponent.containsMatchingElement(
            <div>
                <br />
                <Button onClick={defaultProps.updateComment} color="primary" variant="raised">Update</Button>
                <h1> {defaultProps.comment} </h1>
            </div>
        )).toBe(true);
    })
});
