function Header(){
    var title = "React Learning"
    var bgPrimary = "bg-primary"
    var isHeader = false;
    var styleObj = {backgroundColor:"red", fontSize:30}

    return(
        <div className={isHeader ? "bgPrimary" : "bg-secondary"}>
            <h2>Header Component</h2>
            <h3 style={{backgroundColor:"red", fontSize:45}}>{title}</h3>    
           <h3 className="bg-secondary" style={styleObj}>{3+3} </h3>
        </div>
    )
}

export default Header;
//{} are used to write js in html
// ternary operator = condition ? true statement:false 
