package com.productstore.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.productstore.demo.models.Product;
import com.productstore.demo.repositories.ProductRepository;

@Component
public class DummyDataLoader implements CommandLineRunner {

	private final ProductRepository repository;

	@Autowired
	public DummyDataLoader(ProductRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		for(int i=0; i< 1000; i++) {
			this.repository.save(new Product("Apple i-Phone "+Integer.toString(i)+"X", i*3));
		}

		
	}
}