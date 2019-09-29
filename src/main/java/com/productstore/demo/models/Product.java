package com.productstore.demo.models;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product_details")
public class Product {

	private @Id @GeneratedValue Long id;
	private String name;
	private Integer price;

	@SuppressWarnings("unused")
	private Product() {}

	public Product(String name, Integer price) {
		this.name = name;
		this.price = price;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Product product = (Product) o;
		return Objects.equals(id, product.id) &&
			Objects.equals(name, product.name) &&
			Objects.equals(price, product.price);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, name, price);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getPrice() {
		return price;
	}
	
	public void setPrice(Integer price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "Employee{" +
			"id=" + id +
			", Name='" + name + '\'' +
			", Price='" + price + '\'' +
			'}';
	}
}
