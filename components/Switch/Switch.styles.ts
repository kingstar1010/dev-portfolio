import styled from 'styled-components';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export const SwitchContaier = styled(SwitchPrimitive.Root)`
all: unset;
position: fixed;
bottom: 20px;
right: 30px;
box-sizing: border-box;
width: 50px;
height: 28px;
background-color: #252525;
border-radius: 9999px;
cursor: pointer;
`;

export const Thumb = styled(SwitchPrimitive.Thumb)`
display: block;
width: 22px;
height: 22px;
border-radius: 9999px;
transition: transform 350ms ease-in-out;
transform: translateX(4px);
will-change: transform;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

&[data-state='checked'] {
  transform: translateX(25px);
}
`;

export const ThumbContent = styled.div`
width: 100%;
height: 100%;
border-radius: 50px;
background-color: white;
`;

export const IconCont = styled.div<{ reverse?: boolean }>`
position: absolute;
top: 1px;
left: ${({ reverse }) => (reverse ? 25 : 0)}px;
transition: left 350ms ease-in-out;
display: flex;
justify-content: center;
align-items: center;
`;