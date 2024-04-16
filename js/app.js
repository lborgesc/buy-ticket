function buyTicket() {
    const ticketType = document.getElementById('tipo-ingresso').value;
    const numberTickets = parseInt( document.getElementById('qtd').value);
    const ticket = parseInt(document.getElementById(`qtd-${ticketType}`).innerText);

    if (ticket && ticket-numberTickets < 0 ) {
        alert('Quantidade indisponível');
        document.getElementById('qtd').value = 0;
        return;
    }else if( ticket-numberTickets < 0){
        alert('Ingressos esgotados');
        document.getElementById('qtd').value = 0;
        return;
    }
    
    document.getElementById(`qtd-${ticketType}`).innerText = ticket-numberTickets;
    alert('Compra realizada');
    document.getElementById('qtd').value = 0;
}