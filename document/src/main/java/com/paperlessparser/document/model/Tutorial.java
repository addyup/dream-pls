package com.paperlessparser.document.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "tutorials")
public class Tutorial {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "published")
    private Boolean published;


    public Tutorial() {
    }

    public Tutorial(String title, String description, Boolean published) {
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isPublished() {
        return this.published;
    }

    public Boolean getPublished() {
        return this.published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }

    public Tutorial id(Long id) {
        setId(id);
        return this;
    }

    public Tutorial title(String title) {
        setTitle(title);
        return this;
    }

    public Tutorial description(String description) {
        setDescription(description);
        return this;
    }

    public Tutorial published(Boolean published) {
        setPublished(published);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Tutorial)) {
            return false;
        }
        Tutorial tutorial = (Tutorial) o;
        return Objects.equals(id, tutorial.id) && Objects.equals(title, tutorial.title) && Objects.equals(description, tutorial.description) && Objects.equals(published, tutorial.published);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, published);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", published='" + isPublished() + "'" +
            "}";
    }
    
}
