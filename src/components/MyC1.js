import MyC2 from "./MyC2";
import MyC3 from "./MyC3";

function MyC1(props){
    let name = "Nirbhay"
    return<>
        <h1>My name is {name} {props.surname}</h1>
        <MyC2 />
        <MyC3 purpose = 'Job'/>
    </>
        
}

export default MyC1;