package com.mi.rest.restfulwebservices.exception;

import java.util.Date;

public class ExceptionResponse  {
    private Date timeStamp;
    private String message;
    private String details;
    private String error;



    public ExceptionResponse(Date timeStamp, String message, String details, String error) {
        this.timeStamp = timeStamp;
        this.message = message;
        this.details = details;
        this.error = error;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
