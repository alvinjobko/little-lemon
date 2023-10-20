import {useState} from "react"; 

function Forms (){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail]= useState("");
    const [phone,setPhone] =useState("");
    const [numPeople,setNumPeople] = useState(1);
    const [bookDate,setBookDate] = useState();
    const []
    const today = new Date();
    const currentDate = today.getFullYear() + "-" + today.getMonth()+1  + "-" + today. getDate();
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="fname">
                        First Name
                    </label>
                        <input id="fname" type="text" required minLength={1} maxLength={50} placeholder="First name" onChange={(e)=>{setFirstName(e.target.value);}} value={firstName}/>
                </div>
                <div>
                    <label htmlFor="lname">
                        Last Name
                    </label>
                        <input id="lname" type="text" required minLength={1} maxLength={50} placeholder="Last name" onChange={(e)=>{setLastName(e.target.value);}} value={lastName}/>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                        <input id="email"  type="email" required minLength={4} maxLength={200} placeholder="Email" onChange={(e)=>{setEmail(e.target.value);}} value={email}/>
                </div>
                <div>
                    <label htmlFor="phone">
                        Phone Number
                    </label>
                        <input id="phone" type="tel" pattern="+[0-9]{3} [0-9]{8}" placeholder="+852 xxxx xxxx" onChange={(e)=>{setPhone(e.target.value);}} value={phone}/>
                </div>
                <div>
                    <label htmlFor="numPeople">
                        Number of people
                    </label>
                        <input id="numPeople" type="number" onChange={(e)=>{setNumPeople(e.target.value);}} value={numPeople} min={1} />
                </div>
                <div>
                    <label htmlFor="date">Select date</label>
                    <input id="date" type="date"  required onChange={(e)=>{setBookDate(e.target.value)}} value={bookDate} min={currentDate}/>
                </div>
                <div>
                    <labe htmlFor="Occasion">Occasion</labe>
                    <Selection id="Occasion" onChange={(e)=>{set}}
                </div>
            </form>
        </div>
    );
}

export default Forms;