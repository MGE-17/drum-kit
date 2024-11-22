document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", handleclick);
});


function handleclick(){
    alert("I got clicked");
}