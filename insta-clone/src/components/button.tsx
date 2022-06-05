import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    width: string;
    height: string;
    backgroundColor: string;

}

export default function Button(prop: Props) {
    const { children, onClick, backgroundColor, width, height} = prop;
    const ButtonElement = styled.button`
        background-color: ${backgroundColor};
        width:${width};
        height: ${height};
        border-radius: 5px;
        text-transform: uppercase;
        cursor:pointer;
        &:hover {
            background-color: #ccc;
        }
`
    return(
        <ButtonElement onClick={onClick}>
            {children}
        </ButtonElement>
    )
}