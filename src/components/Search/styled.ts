import styled from 'styled-components';

export const SearchWrapper = styled.div`
    position: relative;
    border-bottom: 2px solid #000;
margin: 24px;
padding: 14px;
display: flex;
justify-content: center;
    > input {
        border: 0;
        outline: 0;

        width: 100%;
        height: 46px;
        font-size:18px;

        padding-right: 10px;
        padding-left:  10px;
        color: #CCC;

        &::placeholder {
            color: #CCC;
        }
    }

    > svg {
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #CCC;
    }
`;
