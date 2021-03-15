import styled from 'styled-components';
import classNames from 'classnames';
import {FunctionComponent} from 'react';

const ParagraphStyle = styled.p`
  color: ${props => props.theme.textColor};
  line-height: 1.6rem;
  margin: 0;
  padding: 0;
  font-size: 1rem;

  &.black {
    color: ${props => props.theme.blackColor};
  }

  &.gray {
    color: ${props => props.theme.grayColor};
  }

  &.red {
    color: ${props => props.theme.redColor};
  }

  &.main {
    color: ${props => props.theme.mainColor};
  }

  &.text {
    color: ${props => props.theme.textColor};
  }

  &.heading {
    color: ${props => props.theme.headingColor};
  }

  &.small {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

`;

type Color = "black" | "gray" | "red" | "main" | "text" | "heading";
type Size = "smallest" | "small" | "big";

type Props = {
    color?: Color;
    size?: Size;
}

const Paragraph: FunctionComponent<Props> = (
    {
        color = "text",
        size,
        children,
        ...props
    }) => {
    return (
        <ParagraphStyle
            className={classNames(color, size)}
            {...props}
        >
            {children}
        </ParagraphStyle>
    )
}

export default Paragraph;