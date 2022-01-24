package com.web.curation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.curation.dto.match.Mat_ArticleForm;
import com.web.curation.model.match.Mat_Article;
import com.web.curation.repository.match.Mat_ArticleRepository;

@Service
public class MatchService {
	
    private final Mat_ArticleRepository articleRepository;
	
    @Autowired // 스프링 부트가 미리 생성해놓은 객체를 가져다가 자동 연결함
	public MatchService(Mat_ArticleRepository articleRepository) {
    	this.articleRepository = articleRepository;
    }
    
    public List<Mat_Article> getArticle() {
    	List<Mat_Article> articles = new ArrayList<>();
    	articleRepository.findAll().forEach(article -> articles.add(article.toEntity()));
    	return articles;
    }
    
    
//    public List<Mat_Article> getArticle() {
//    	return articleRepository.findAll();
//    }
    
    public void addNewArticle(Mat_ArticleForm article) {
    	// 1. dto를 Entity로 변경
    	Mat_Article saved = article.toEntity();
    	// 2. Repository를 이용하여 Entity를 DB에 저장함
    	articleRepository.save(saved);
    }
    
    public void deleteArticle(Long articleId) {
    	articleRepository.deleteById(articleId);
    }
}
