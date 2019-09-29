package com.productstore.demo.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.productstore.demo.models.Product;

public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
	
	@RestResource(path = "nameStartsWith", rel = "nameStartsWith")
	public Page findByNameStartsWith(@Param("name") String name, Pageable p);

}

