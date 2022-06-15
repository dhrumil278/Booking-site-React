function Form(props) {
    return (
        <>
            <div className="mainForm">
                <div className="formItems">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Gujarat' value={props.location} />
                </div>
                <div className="formItems">
                    <label htmlFor="">Chack in</label>
                    <input type="text" placeholder='27 July' value={props.checkIn}/>
                </div>
                <div className="formItems">
                    <label htmlFor="">Check out</label>
                    <input type="text" placeholder='29 July' value={props.checkOut}/>
                </div>
                <div className="formItems submit">
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Form;