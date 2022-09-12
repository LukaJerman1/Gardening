import React from 'react';


interface propsTest{
    info:string;
}

function Test(props: propsTest){
    return <li>{props.info}</li>;
}


export default Test;