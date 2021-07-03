const Label=(props)=>{
    console.log(props.usename);
    return(
        <>
        <div>
        <label For="disp"> USERNAME : </label>
        <input type="text" value={props.usename} />
        
        </div>
        </>
    );
}
export default Label;