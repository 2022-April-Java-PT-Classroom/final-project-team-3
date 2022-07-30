package org.wecancodeit.serverside.repositories;
import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Article;

public interface ArticleRepository extends CrudRepository<Article,Long> {
}
