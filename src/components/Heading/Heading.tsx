import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.h2`
    display: flex;
    width: fit-content;
    align-items: center;
    color: ${properties => properties.theme.headingColor};
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;

    &.black {
        color: ${properties => properties.theme.blackColor};
    }

    &.gray {
        color: ${properties => properties.theme.grayColor};
    }

    &.red {
        color: ${properties => properties.theme.redColor};
    }

    &.main {
        color: ${properties => properties.theme.mainColor};
    }

    &.text {
        color: ${properties => properties.theme.textColor};
    }

    &.heading {
        color: ${properties => properties.theme.headingColor};
    }

    &.white {
        color: ${properties => properties.theme.whiteColor};
    }

    &.large {
        font-size: 3rem;
    }

    &.small {
        font-size: 1rem;
    }

    &.smallest {
        font-size: 0.75rem;
        line-height: 1.5rem;
    }

    &.underline {
        text-decoration: underline ${properties => properties.theme.mainColor};
        text-underline-position: under;
    }
`;

type Color = 'black' | 'gray' | 'red' | 'main' | 'text' | 'heading' | 'white';
type Size = 'smallest' | 'small' | 'normal' | 'medium' | 'large';
type Type = 'h1' | 'h2' | 'h3';

type Properties = {
    size?: Size;
    color?: Color;
    children: any;
    underline?: boolean;
    type?: Type;
};

const Heading: FunctionComponent<Properties> = ({
    size,
    color,
    underline = true,
    type,
    children,
    ...properties
}) => {
    return (
        <HeadingStyle
            as={type}
            className={classNames(size, { underline: underline }, color)}
            {...properties}
        >
            {children}
        </HeadingStyle>
    );
};

export default Heading;
