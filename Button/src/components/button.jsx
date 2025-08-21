function  MyButton({message,children}){
    return(
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    );
}
export default function Button(){
    return(
        <div>
            <MyButton message ="Button Clicked">
                Click Here!
            </MyButton>
        </div>
    );
}