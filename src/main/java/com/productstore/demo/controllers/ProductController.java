package com.productstore.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductController {

	@RequestMapping(value = "/add")
	public String index() {
		return "index";
	}

}
