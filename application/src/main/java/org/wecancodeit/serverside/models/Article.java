package org.wecancodeit.serverside.models;




import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String authorName;

    private String articleTitle;
    private String articleBody;
    private Instant date;

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleBody() {
        return articleBody;
    }

    public void setArticleBody(String articleBody) {
        this.articleBody = articleBody;
    }

    public Instant getDate() {
        return date;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public Article(String authorName, String articleTitle, String articleBody, Instant date) {
        this.authorName = authorName;
        this.articleTitle = articleTitle;
        this.articleBody = articleBody;
        this.date = date;
    }
    public Article(){

    }
}