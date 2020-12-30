package com.mi.rest.restfulwebservices.beans;


import lombok.Data;
import lombok.Generated;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Objects;


@Data
@Document(collection = "tasks")
public class Task {

    @Id
    private String id;

    private String title;

    @CreatedDate
    private Date createdDate = new Date();

    @LastModifiedDate
    private Date lastModified = new Date();
    private boolean done;


    public Task() {
    }

    public Task(String title) {
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getLastModified() {
        return lastModified;
    }

    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task)) return false;
        Task task = (Task) o;
        return done == task.done &&
                Objects.equals(id, task.id) &&
                Objects.equals(title, task.title) &&
                Objects.equals(createdDate, task.createdDate) &&
                Objects.equals(lastModified, task.lastModified);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, createdDate, lastModified, done);
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title=" + title +
                ", createdDate=" + createdDate +
                ", lastModified=" + lastModified +
                ", done=" + done +
                '}';
    }

}
