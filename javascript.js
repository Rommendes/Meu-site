/*ESTA Function AO SER CLICADA MOSTRA O MENU, AO SER CLICADA NOVAMENTE, ESCONDE O MENU */
function clickmenu (){
    if(itens.style.display =='block'){
        itens.style.display = 'none'
    }else{
         itens.style.display = 'block'
    }
}
/*Esta função mostra o bloco de ítens (menu) se a tela for grande
---------------------------------
innerWidth => largura da tela */
function mudouTamanho(){
    if(window.innerWidth >= 667){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}