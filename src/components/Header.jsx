function Hearder(props) {
    console.log(props);
    const {title, count, subContent} = props;
    return(
        <div style={{color:"white", backgroundColor:"violet", height:"30vh", display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>{title}</div>
    );
}
export default Hearder;