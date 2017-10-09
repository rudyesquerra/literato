import React from 'react';
import ReactDOM from 'react-dom';
import BookTitle from '../googleComponents/bookTitle';
import { mount } from 'enzyme'

const book = {
    title: "Aftermath: Star Wars",
    authors: [
        "Chuck Wendig"
    ],
    publisher: "Del Rey"
}

it('renders without crashing', () => {
<<<<<<< HEAD
	const div = document.createElement('div');
	ReactDOM.render(<BookTitle {...book} />, div);
=======
    const div = document.createElement('div');
    ReactDOM.render(<BookTitle {...book} />, div);
>>>>>>> dashboard_styling
});

it('renders a book title', () => {
    const component = mount(<BookTitle {...book} />)
    const title = component.find('.title')
    expect(title.text()).toBe('Aftermath: Star Wars')
})

it('renders a book authors', () => {
    const component = mount(<BookTitle {...book} />)
    const title = component.find('.authors')
    expect(title.text()).toBe('Chuck Wendig')
})

it('renders book publishers', () => {
    const component = mount(<BookTitle {...book} />)
    const title = component.find('.publishers')
    expect(title.text()).toBe('Del Rey')
})
