import styled from 'styled-components';


export const Text = styled.h1
`
    color: #fff;
    text-align: center;
    Font-size: 2em;
    background-color: #F05454;
    border-radius: 50px;
    padding: 15px;
`


export const Button = styled.button

`
color:#F05454;
font-size: 1em;
margin: 1em;
padding: 0.35em 2.2em;
border: 2px solid palevioletred;
border-radius: 11px;
`

export const DIV = styled.div
`
display: flex;
max-width: 500px;
margin: 55px 15px;


`
export const Section = styled.section
`
text-align: center;
margin: 0 auto;
padding: 2.9em;
background-color: #FF5959;
border-radius: 50px;
color: #fff;

@media screen and (max-width: 1024px) {
    margin: 8px 5px;
}  
`

export const SectionArtist = styled(Section)
`
    img {
        width: 50%;
        height: auto;
        border-radius: 50%;
    }


`
