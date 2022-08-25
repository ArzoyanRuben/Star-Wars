import styled from "styled-components";

export const CardWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 25px;
.single-item{
    border: 2px solid #979494;
    width: 55%;
    height: fit-content;
    margin: 15px;
    position: relative;
    border-radius: 12px;
    padding: 10px;
}

.item-title{
    display:flex;
    justify-content: center;
    font-size: 45px;
    margin-top: 24px;
}

.back-button{
    margin: 24px;
    position: absolute;
}

`;