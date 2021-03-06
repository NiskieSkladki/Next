import Glide from '@glidejs/glide';
import classNames from 'classnames';
import { cloneElement, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

import A11yText from '../A11yText/A11yText';

const Carousel = ({ element = 'glide', options, children }) => {
    const [slider] = useState(new Glide(`.${element}`, options));
    useEffect(() => {
        slider.mount();
        // subscribe to an event
        // slider.on('run.before', (event) => {
        //     // ... do something cool here
        // })
        //R
        slider.on('run.before', event => {
            const scrollSteps = options.perView;
            event.steps = event.direction === '>' ? -scrollSteps : scrollSteps;
        });
        return () => slider.destroy();
    }, []);

    return (
        <GlideBox className={classNames(element)}>
            <div className="glide__track" data-glide-el="track">
                <GlideArea
                    className="glide__slides"
                    style={{
                        display: 'flex',
                        margin: '0 auto',
                        padding: '0',
                        cursor: 'pointer'
                    }}
                >
                    {children.map((slide, index) => {
                        return cloneElement(slide, {
                            key: index,
                            className: `${slide.props.className} glide__slide`
                        });
                    })}
                </GlideArea>
            </div>
            <Arrows className="glide__arrows" data-glide-el="controls">
                <Arrow
                    className="glide__arrow glide__arrow--left"
                    data-glide-dir="<"
                >
                    <FiChevronLeft />
                    <A11yText>{`Poprzedni slajd`}</A11yText>
                </Arrow>
                <Arrow
                    className="glide__arrow glide__arrow--right"
                    data-glide-dir=">"
                >
                    <FiChevronRight />
                    <A11yText>{`Nast??pny slajd`}</A11yText>
                </Arrow>
            </Arrows>
        </GlideBox>
    );
};

const GlideBox = styled.section`
    position: relative;
    overflow-x: hidden;
    user-select: none;
    max-width: 100vw;
`;

const GlideArea = styled.ul`
    list-style: none;
`;

const Arrows = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
`;

const Arrow = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-content: center;
    margin: 0;
    padding: 0;

    &.glide__arrow--left {
        left: 0;
    }

    &.glide__arrow--right {
        right: 0;
    }
`;

export default Carousel;
