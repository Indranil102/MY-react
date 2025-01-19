import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {

   // const display=true;

    //condtional jsx with component
    /*if(display){
        return (<div><h3>This is a conditional compn</h3></div>);
    }
    else{
        return(
        <div>
             <h3>code everyday</h3>
        </div>)
    }


        if (display){
            return <Welcome/>
        }
        else{
            return <Code/>
        }
            */
          
     // using elemnt to staore or return vlaue
          

           const dis=true;
           // if dis is tru messag1 or dis2
          /* if (dis){
            message= <h1>This isi my mesage</h1>
           }else{
            message= <h1>This is message is another time </h1>
           } 

           return message*/
           

           // using ternery operator 
          // message = dis? "show me " : "shut up";

           return dis? <Code/> : <Welcome/>


 
} 

export default ConditionalComponent
