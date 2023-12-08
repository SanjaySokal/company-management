package com.company.manager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.company.manager.Entity.Company;
import com.company.manager.Service.CompanyService;

@CrossOrigin("http://localhost:3000/")
@RestController
public class ApiController {
    @Autowired
    private CompanyService service;

    @GetMapping("/get")
    private List<Company> getCompanies() {
        return service.getCompanies();
    }

    @PostMapping("/add")
    private boolean addCompanies(@RequestBody Company company) {
        return service.updateCompany(company);
    }

    @GetMapping("/get/{id}")
    private Company getCompaniesById(@PathVariable Long id) {
        return service.getCompany(id);
    }

    @GetMapping("/delete/{id}")
    private boolean deleteCompaniesById(@PathVariable Long id) {
        return service.deleteCompany(id);
    }
}
