package org.wecancodeit.serverside.models;




import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDate;


@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String authorName;

    private String articleTitle;

    //@Column(columnDefinition = "varchar(1080)")
    @Lob
    private String articleBody;

    private LocalDate date;

    private String articleImage;


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

    public String getArticleImage() {
        return articleImage;
    }

    public void setArticleImage(String articleImage) {
        this.articleImage = articleImage;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Article(String authorName, String articleTitle, String articleBody, LocalDate date, String articleImage) {
        this.authorName = authorName;
        this.articleTitle = articleTitle;
        this.articleBody = articleBody;
        this.date = date;
        this.articleImage= articleImage;
    }
    public Article(){

    }
}