import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
	{
		title: 'What is React?',
		content: 'React is frontend ui library'
	},
	{
		title: 'Why use React?',
		content: 'React is a fav javascript librabry amoung engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by using components'
	}
];

const options = [
	{
		label: 'Red',
		value: 'red'
	},
	{
		label: 'Green',
		value: 'green'
	},
	{
		label: 'Blue',
		value: 'blue'
	}
];

const App = () => {
	const [ selected, setSelected ] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					heading='Select a Color'
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};

export default App;
