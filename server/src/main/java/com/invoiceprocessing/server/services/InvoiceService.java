package com.invoiceprocessing.server.services;

import java.util.List;

import com.invoiceprocessing.server.model.Invoice;

public interface InvoiceService {

    //Services:
    public Invoice addInvoice(Invoice invoice);
    public List<Invoice> getInvoices();
    public Invoice deleteInvoice(Long id);

}
