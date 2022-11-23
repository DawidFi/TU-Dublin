const sub = document.querySelector('#submit')

sub.onclick = (event) => {
    event.preventDefault();
    alert("Thank you! We will contact you shortly!");
    document.querySelector("form").reset();
}