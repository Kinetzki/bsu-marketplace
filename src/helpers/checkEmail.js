const checkGmail = (gmail) => {
    const address = gmail.split("@g.")[1];
    console.log(address);
    if(address !== "batstate-u.edu.ph") {
        console.log("Not a valid Gmail Address")
        return false;
    }
    return true;
}

export default checkGmail;