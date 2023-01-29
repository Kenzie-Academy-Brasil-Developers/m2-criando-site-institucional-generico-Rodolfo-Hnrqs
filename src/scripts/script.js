function showUpModal(){
    const modalContainer = document.querySelector(".modalWrapper");
    const buttons = document.querySelectorAll(".showModal");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            modalContainer.showModal();
    
            closeModal();
        });
    }); 
}

function closeModal(){
    const closeBtn = document.querySelector(".closeBtn");
    const modalContainer = document.querySelector(".modalWrapper");
    closeBtn.addEventListener("click", () => {
        modalContainer.close();
    })
}
showUpModal();
