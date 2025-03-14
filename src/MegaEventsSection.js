// MegaEventsSection.js
import React from 'react';

const MegaEventsSection = () => {
    return (
        <div className="container_pre_event">
            <h2>Mega-Events</h2>
            <ul className="content_pre_event">
                <li className="item-wrapper" title="A fun and competitive gaming event to promote teamwork and sportsmanship among engineering students." style={{ padding: '20px' }}>Esports</li>
                <li className="item-wrapper" title="A competition where students design and conduct surveys related to engineering topics, emphasizing research and analytical skills." style={{ padding: '20px' }}>Survey Competition</li>
                <li className="item-wrapper" title="A brainstorming session/contest where students collaborate to generate innovative ideas addressing real-world engineering challenges." style={{ padding: '20px' }}>Ideathon</li>
                <li className="item-wrapper" title="An academic quiz covering various engineering disciplines, challenging participants' knowledge and understanding." style={{ padding: '20px' }}>Engineering Quiz</li>
                <li className="item-wrapper" title="Similar to the Paper Bridge competition, but using popsicle sticks as the primary building material." style={{ padding: '20px' }}>Pop Sickle Bridge</li>
                <li className="item-wrapper" title="A programming competition focusing on solving simple problems with C/C++" style={{ padding: '20px' }}>Programming Contest</li>
                <li className="item-wrapper" title="A platform for students to showcase their engineering projects, highlighting their creativity and problem-solving abilities." style={{ backgroundColor: 'rgb(69, 224, 165)', padding: '20px' }}>Project Exhibition</li>
            </ul>
        </div>
    );
}

export default MegaEventsSection;
