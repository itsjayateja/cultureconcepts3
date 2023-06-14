const form = document.getElementById('contact-form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const message = document.getElementById('message')
const city = document.getElementById('city')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submit button clicked!")
    const ebody = `
				<b>Name: </b>${name.value}
				
                <br>
                <br>
				<b>Email: </b>${email.value}
				<br>
                <br>
				<b>Phone: </b>${phone.value}
				<br>
                <br>
				<b>Message: </b>${message.value}
				<br>
                <br>
				<b>city: </b>${city.value}
			`
    Email.send({
        SecureToken: "c20b46f0-b685-4b9c-bf37-db33f8f7f071",
        To: 'mahindra.nagula@gmail.com',
        From: "itsjayateja@gmail.com",
        Subject: "New Contact Request",
        Body: ebody
    }).then(
        message => alert("Thank you for your interest! Our representative will be in touch with you shortly.")
    );
})