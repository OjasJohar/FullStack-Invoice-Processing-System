package com.invoiceprocessing.server.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.invoiceprocessing.server.model.Invoice;

public interface InvoiceDao extends JpaRepository<Invoice, Long>{
    //Dao= Data Access Object
}
