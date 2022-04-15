const webForm =()=>{

    return(<div className="container">
    <div className={getTheme()}>
      <div className="left" />
      <div className="right">
        <h4 >Email me</h4>
        <input type="text" className="field" name ="name" onChange={ChangeHandler} placeholder="Your Name"/>
        <input type="text" className="field" name ="Email" onChange={ChangeHandler} placeholder="Your Email"/>
        <input type="text" className="field" Name ="phone" onChange={ChangeHandler} placeholder="Phone" />
        <textarea placeholder="Message" name="message" onChange={ChangeHandler} className="field" />
        <button type="button" className="bttn" onClick={sendMail} >Send</button>
      </div>
    </div>
  </div>);
}


export default webForm;