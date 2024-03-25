const $faqsContainer = document.querySelectorAll(".faqs__container"),
        $imgQuery = document.querySelectorAll("img[query]");

let previuos = null;

document.addEventListener("click", (e)=>{
    if(e.target.getAttribute("query")){

        $faqsContainer[e.target.getAttribute("query") - 1].classList.toggle("faqs__container--active");
        $imgQuery[e.target.getAttribute("query") - 1].src = $imgQuery[e.target.getAttribute("query") - 1].getAttribute("src") == "./assets/images/icon-minus.svg"?
        "./assets/images/icon-plus.svg":"./assets/images/icon-minus.svg";

        if(previuos != null && previuos != (e.target.getAttribute("query") - 1)){
            $faqsContainer[previuos].classList.remove("faqs__container--active");
            $imgQuery[previuos].src = "./assets/images/icon-plus.svg";
        }

        previuos = (e.target.getAttribute("query") - 1);

    }
});