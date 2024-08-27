package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping
	public String index() {
		return "index";
	}
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/cadastro")
	public String cadastro() {
		return "cadastro";
	}
	
    @GetMapping("/quemSomos")
	public String quemSomos() {
		return "quemSomos";
	}

    @GetMapping("/planos")
	public String planos() {
		return "planos";
	}

    @GetMapping("/perfil")
	public String perfil() {
		return "perfil";
	}

    @GetMapping("/treinos")
	public String treinos() {
		return "treinos";
	}

    @GetMapping("/arquivos")
	public String arquivos() {
		return "arquivos";
	}
	
}