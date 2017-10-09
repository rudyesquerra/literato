import React from 'react';
import ReactDOM from 'react-dom';
import BookDetails from '../googleComponents/bookDetails';
import { mount } from 'enzyme'

const book = {
	description: 'NEW YORK TIMES BESTSELLER'
}

it('renders without crashing', () => {
	const div = document.createElement('div');
  	ReactDOM.render(<BookDetails {...book} />, div);
});

it('renders book description', () => {
	const component = mount(<BookDetails {...book} />)
	const title = component.find('.description')
	expect(title.text()).toBe('NEW YORK TIMES BESTSELLER')
})
