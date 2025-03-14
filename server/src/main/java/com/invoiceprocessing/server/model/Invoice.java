package com.invoiceprocessing.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//This Annotation tells hibernate to make table named Invoice and save in database with primary-key(id).
@Entity  
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //This @ will auto generate id.
    private long id; //variable declarations

    private String vendor;
    private String product;
    private int amount;
    private String date;
    private String action;

    //Default Constructor:
    public Invoice() {}

    //Constructor:
    public Invoice(long id, String vendor, String product, int amount, String date, String action) {
        this.id = id;
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.date = date;
        this.action = action;
    }

    //Getters and Setters:
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getVendor() {
        return vendor;
    }
    public void setVendor(String vendor) {
        this.vendor = vendor;
    }
    public String getProduct() {
        return product;
    }
    public void setProduct(String product) {
        this.product = product;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getAction() {
        return action;
    }
    public void setAction(String action) {
        this.action = action;
    }

}