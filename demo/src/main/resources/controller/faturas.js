document.addEventListener('DOMContentLoaded', () => {
    const invoicesData = [
        { month: 'Janeiro', year: 2024, status: 'Pago', amount: 150.00, file: '../static/boletos/JoseGomes/2024/janeiro.pdf' },
        { month: 'Fevereiro', year: 2024, status: 'Pendente', amount: 150.00, file: '../static/boletos/JoseGomes/2024/fevereiro.pdf' },
        // Adicione mais faturas aqui
    ];

    function renderInvoices(year) {
        const invoiceContainer = document.getElementById('invoices');
        invoiceContainer.innerHTML = ''; // Limpa o container

        let totalPaid = 0;

        invoicesData.filter(invoice => invoice.year == year).forEach(invoice => {
            const button = document.createElement('button');
            button.className = 'invoice-button';
            button.innerText = `${invoice.month}/${invoice.year}`;
            button.onclick = () => {
                window.location.href = invoice.file;
            };

            const status = document.createElement('div');
            status.className = 'status';
            status.innerText = `Status: ${invoice.status}`;

            if (invoice.status === 'Pago') {
                totalPaid += invoice.amount;
            }

            const wrapper = document.createElement('div');
            wrapper.appendChild(button);
            wrapper.appendChild(status);

            invoiceContainer.appendChild(wrapper);
        });

        document.getElementById('totalPaid').innerText = totalPaid.toFixed(2).replace('.', ',');
    }

    window.filterByYear = () => {
        const year = document.getElementById('yearFilter').value;
        renderInvoices(year);
    }

    // Render inicial para o ano padrão (2024)
    renderInvoices(2024);
});
