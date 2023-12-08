package com.company.manager.Service;

import java.util.List;

import com.company.manager.Entity.Company;

public interface CompanyService {
    public List<Company> getCompanies();

    public Company getCompany(Long id);

    public boolean updateCompany(Company company);

    public boolean deleteCompany(Long id);
}
