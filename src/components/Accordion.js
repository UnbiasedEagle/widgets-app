import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [ activeIndex, setActiveIndex ] = useState(null);
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<div onClick={() => onTitleClick(index)} className={`title ${activeIndex === index ? 'active' : null}`}>
					<i className='dropdown icon' />
					{item.title}
				</div>
				<div className={`content ${activeIndex === index ? 'active' : null}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
